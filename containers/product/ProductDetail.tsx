import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import styled from 'styled-components';
import { Button, Col, Row } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ProductDetailData from '../../assets/data/product-detail.json';
import ProductListData from '../../assets/data/product-list.json';
import withTranslation from '../../components/withTranslation';
import { ClientContext } from '../../contexts/ClientContext';

interface Props extends WithRouterProps {
  t: any;
}

type ImageSelectedProps = {
  show: boolean;
};

type ColorProps = {
  color: string;
};

type ImageControlIconProps = {
  align: string;
};

const ProductControl = styled.div`
  padding: 30px 0px;
`;

const PreviousProductContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #765e30;
  cursor: pointer;
`;

const NextProductContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #765e30;
  cursor: pointer;
`;

const ControlIcon = styled.img`
  width: 10px;
`;

const PreviousProductText = styled.div`
  padding-left: 10px;
`;

const NextProductText = styled.div`
  padding-right: 10px;
`;

const ProductImageContainer = styled.div`
  padding: 0px 10px;
`;

const MainImageContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 0px;
    display: flex !important;
    justify-content: center;
    align-content: center;
    height: 170px;
  }
`;

const MainImage = styled.img`
  height: 210px;

  @media (max-width: 768px) {
    height: auto;
    width: auto;
    max-height: 170px;
    max-width: 200px;
  }
`;

const OtherImageContainer = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 120px;
`;

const OtherImage = styled.img`
  max-height: 100px;
  max-width: 100px;
  cursor: pointer;
`;

const ImageSelected = styled.div`
  position: absolute;
  background-color: #000000;
  border-radius: 10px;
  opacity: 0.4;
  height: 105px;
  width: 105px;
  display: ${(props: ImageSelectedProps) => (props.show ? 'block' : 'none')};
`;

const ProductTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #765e30;
  min-height: 65px;

  @media (max-width: 768px) {
    font-size: 22px;
    text-align: center;
    margin-top: 28px;
  }
`;

const ProductSpecContainer = styled.div`
  background-color: #f6f7f3;
  border-radius: 10px;
  margin: 10px 0px;
  padding: 30px;
`;

const SpecTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #765e30;
  margin-bottom: 5px;
`;

const SpecContentContainer = styled.div`
  min-height: 200px;
`;

const SpecContainer = styled.div`
  display: flex;
`;

const SpecTopic = styled.span`
  display: inline-block;
`;

const SpecContent = styled.span`
  display: inline-block;
  padding-left: 10px;
  padding-bottom: 5px;
`;

const ColorContainer = styled.div`
  min-height: 60px;
`;

const ColorTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #765e30;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ColorPalette = styled.div`
  display: flex;
  flex-direction: row;
`;

const Color = styled.div`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 3px;
  background-color: ${(props: ColorProps) =>
    props.color ? props.color : '#ffffff'};
`;

const BottomButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 992px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const BottomContainer = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin-right: 10px;

  .ant-btn {
    border-radius: 8px;
    height: 40px;
    width: 120px;
    background-color: #923140;
    border-color: #923140;
    letter-spacing: 0.8px;
    color: #ffffff;

    :focus {
      border-color: #923140;
    }
  }

  @media (max-width: 768px) {
    margin-right: 0px;
    margin: 10px 0px;
    text-align: center;

    .ant-btn {
      width: 100%;
    }
  }
`;

const SocialContainer = styled.div`
  @media (max-width: 992px) {
    text-align: center;
  }
`;

const Social = styled.img`
  cursor: pointer;
  margin-left: 15px;

  @media (max-width: 768px) {
    margin: 7.5px;
  }
`;

const ImageControlIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: ${(props: ImageControlIconProps) =>
    props.align === 'left' ? 'flex-start' : 'flex-end'};
`;

class ProductDetail extends Component<Props> {
  static contextType = ClientContext;

  state = {
    imageSelected: 0,
    settings: {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }
  };
  productDetailData: any = ProductDetailData;
  productListData = [...ProductListData];
  productIndex = this.productListData.findIndex(item => {
    return item.slug === this.props.router.query.product;
  });
  previousIndex =
    this.productIndex - 1 < 0
      ? this.productListData.length - 1
      : this.productIndex - 1;
  nextIndex =
    this.productIndex + 1 >= this.productListData.length
      ? 0
      : this.productIndex + 1;
  productDetail = this.productDetailData[
    String(this.props.router.query.product)
  ];
  slider: any;

  handleChangeImage = (index: number) => {
    this.setState({ imageSelected: index });
  };

  handlePrevImage = () => {
    this.slider.slickPrev();
  };

  handleNextImage = () => {
    this.slider.slickNext();
  };

  getLocale = () => {
    return this.props.router.query.lang;
  };

  renderDesktop = () => (
    <Row>
      <Col span={12}>
        <ProductImageContainer>
          <MainImageContainer>
            <MainImage
              src={this.productDetail.images[this.state.imageSelected]}
            />
          </MainImageContainer>

          <Slider {...this.state.settings}>
            {this.productDetail.images.map((image: string, index: number) => {
              return (
                <OtherImageContainer key={`img-${index}`}>
                  <ImageSelected show={this.state.imageSelected === index} />
                  <OtherImage
                    src={image}
                    onClick={() => {
                      this.handleChangeImage(index);
                    }}
                  />
                </OtherImageContainer>
              );
            })}
          </Slider>
        </ProductImageContainer>
      </Col>
      <Col span={12}>
        <ProductTitle>
          {this.productDetail.name_en}
          <br />
          {this.productDetail.name_th}
        </ProductTitle>
        <ProductSpecContainer>
          <SpecContentContainer>
            <SpecTitle>{this.props.t('product:spec')}</SpecTitle>
            {this.getLocale() === 'en'
              ? this.productDetail[`specs_en`].map(
                  (spec: string, index: number) => (
                    <SpecContainer key={`spec-${index}`}>
                      <SpecTopic>●</SpecTopic>
                      <SpecContent>{spec}</SpecContent>.
                      <br />
                    </SpecContainer>
                  )
                )
              : this.productDetail[`specs_th`].map(
                  (spec: string, index: number) => (
                    <SpecContainer key={`spec-${index}`}>
                      <SpecTopic>●</SpecTopic>
                      <SpecContent>{spec}</SpecContent>.
                      <br />
                    </SpecContainer>
                  )
                )}
          </SpecContentContainer>
          <ColorContainer>
            <ColorTitle>{this.props.t('product:color')}</ColorTitle>
            <ColorPalette>
              {this.productDetail.colors.map((color: string, index: number) => (
                <Color key={`color-${index}`} color={color} />
              ))}
            </ColorPalette>
          </ColorContainer>
        </ProductSpecContainer>
        <BottomContainer>
          <Row type="flex" align="middle">
            <Col span={24} lg={14} xl={12}>
              <BottomButtonContainer>
                <Link href={`/${this.getLocale()}/plan-and-price`}>
                  <a>
                    <ButtonContainer>
                      <Button>{this.props.t('product:getPlan')}</Button>
                    </ButtonContainer>
                  </a>
                </Link>
                <Link href={`/${this.getLocale()}/contact`}>
                  <a>
                    <ButtonContainer>
                      <Button>{this.props.t('common:contactUs')}</Button>
                    </ButtonContainer>
                  </a>
                </Link>
              </BottomButtonContainer>
            </Col>
            <Col span={24} lg={10} xl={12}>
              <SocialContainer>
                <Social src="/icons/facebook-blue.svg" width="10px" />
                <Social src="/icons/instagram-blue.svg" width="20px" />
                <Social src="/icons/pinterest-blue.svg" width="20px" />
                <Social src="/icons/twitter-blue.svg" width="22px" />
              </SocialContainer>
            </Col>
          </Row>
        </BottomContainer>
      </Col>
    </Row>
  );

  renderMobile = () => (
    <Row>
      <Col span={24}>
        <Row type="flex" align="middle">
          <Col span={2}>
            <ImageControlIcon align="left" onClick={this.handlePrevImage}>
              <img src="/icons/angle-left.svg" width="8px" />
            </ImageControlIcon>
          </Col>
          <Col span={20}>
            <ProductImageContainer>
              <Slider
                ref={slider => (this.slider = slider)}
                {...this.state.settings}
              >
                {this.productDetail.images.map(
                  (image: string, index: number) => {
                    return (
                      <MainImageContainer key={`img-${index}`}>
                        <MainImage src={image} />
                      </MainImageContainer>
                    );
                  }
                )}
              </Slider>
            </ProductImageContainer>
          </Col>
          <Col span={2}>
            <ImageControlIcon align="right" onClick={this.handleNextImage}>
              <img src="/icons/angle-right.svg" width="8px" />
            </ImageControlIcon>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <ProductTitle>
          {this.productDetail.name_en}
          <br />
          {this.productDetail.name_th}
        </ProductTitle>
        <ProductSpecContainer>
          <SpecContentContainer>
            <SpecTitle>{this.props.t('product:spec')}</SpecTitle>
            {this.getLocale() === 'en'
              ? this.productDetail[`specs_en`].map(
                  (spec: string, index: number) => (
                    <SpecContainer key={`spec-${index}`}>
                      <SpecTopic>●</SpecTopic>
                      <SpecContent>{spec}</SpecContent>.
                      <br />
                    </SpecContainer>
                  )
                )
              : this.productDetail[`specs_th`].map(
                  (spec: string, index: number) => (
                    <SpecContainer key={`spec-${index}`}>
                      <SpecTopic>●</SpecTopic>
                      <SpecContent>{spec}</SpecContent>.
                      <br />
                    </SpecContainer>
                  )
                )}
          </SpecContentContainer>
          <ColorContainer>
            <ColorTitle>{this.props.t('product:color')}</ColorTitle>
            <ColorPalette>
              {this.productDetail.colors.map((color: string, index: number) => (
                <Color key={`color-${index}`} color={color} />
              ))}
            </ColorPalette>
          </ColorContainer>
        </ProductSpecContainer>
        <Link href={`/${this.getLocale()}/plan-and-price`}>
          <a>
            <ButtonContainer>
              <Button>{this.props.t('product:getPlan')}</Button>
            </ButtonContainer>
          </a>
        </Link>
        <Link href={`/${this.getLocale()}/contact`}>
          <a>
            <ButtonContainer>
              <Button>{this.props.t('common:contactUs')}</Button>
            </ButtonContainer>
          </a>
        </Link>
      </Col>
    </Row>
  );

  render() {
    const client = this.context;

    return (
      <>
        <Head>
          <title>{`${this.productDetail.name_en} - Roongnapa Packaging`}</title>
          <meta
            property="og:image"
            content={`https://www.roongnapaplastic.com${this.productDetail.images[0]}`}
          ></meta>
        </Head>
        <ProductControl>
          <Row>
            <Col span={12}>
              <Link
                href={`/${this.getLocale()}/product/${
                  this.productListData[this.previousIndex].slug
                }`}
              >
                <a>
                  <PreviousProductContainer>
                    <ControlIcon src="/icons/arrow-left.svg" />
                    <PreviousProductText>
                      {this.props.t('product:prevProduct')}
                    </PreviousProductText>
                  </PreviousProductContainer>
                </a>
              </Link>
            </Col>
            <Col span={12}>
              <Link
                href={`/${this.getLocale()}/product/${
                  this.productListData[this.nextIndex].slug
                }`}
              >
                <a>
                  <NextProductContainer>
                    <NextProductText>
                      {this.props.t('product:nextProduct')}
                    </NextProductText>
                    <ControlIcon src="/icons/arrow-right.svg" />
                  </NextProductContainer>
                </a>
              </Link>
            </Col>
          </Row>
        </ProductControl>
        {client.mobileVersion ? this.renderMobile() : this.renderDesktop()}
      </>
    );
  }
}

export default withRouter(withTranslation(ProductDetail));
