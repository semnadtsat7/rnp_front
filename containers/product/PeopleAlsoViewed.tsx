import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import styled from 'styled-components';
import { Button, Col, Row } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import ProductDetailData from '../../assets/data/product-detail.json';
import ProductListData from '../../assets/data/product-list.json';
import withTranslation from '../../components/withTranslation';
import { ClientContext } from '../../contexts/ClientContext';

interface Props extends WithRouterProps {
  t: any;
}

type ImageControlIconProps = {
  align: string;
};

type ContentMoreProps = {
  show: boolean;
};

const PeopleAlsoViewedContainer = styled.div`
  padding: 30px 0px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #765e30;
  text-align: center;
`;

const ProductListContainer = styled.div`
  padding: 20px 0px;

  .slick-slide {
    padding: 0px 15px;
  }
`;

const ImageControlIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: ${(props: ImageControlIconProps) =>
    props.align === 'left' ? 'flex-start' : 'flex-end'};
`;

const ProductContainer = styled.div`
  box-shadow: 0px 8px 15px #e7eaf0;
  border-radius: 10px;
  height: 315px;
  padding: 30px 30px 0px 30px;
  user-select: none;
`;

const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
`;

const ProductImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 170px;
  width: auto;
  height: auto;
`;

const ProductTitle = styled.div`
  padding-top: 30px;
  padding-bottom: 15px;
  font-size: 16px;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
`;

const LearnMoreButton = styled.div`
  margin: 0px -30px 0px -30px;

  .ant-btn {
    border-radius: 11px;
    height: 46px;
    background-color: #923140;
    border-color: #923140;
    font-weight: bold;
    letter-spacing: 0.8px;
    color: #ffffff;
    width: 100%;

    :focus {
      border-color: #923140;
    }
  }
`;

const MoreProduct = styled.span`
  display: ${(props: ContentMoreProps) => (props.show ? 'inline' : 'none')};
`;

const ShowMoreContainer = styled.div`
  padding-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MoreText = styled.div`
  font-size: 12px;
`;

const CaretDownIcon = styled.img`
  width: 15px;
`;

class PeopleAlsoViewed extends Component<Props> {
  static contextType = ClientContext;

  state = {
    isClient: false,
    numberProduct: ProductListData.length,
    numberShowProduct: 4,
    settings: {
      dots: false,
      slidesToShow: 3,
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
  productListData = ProductListData;
  slider: any;

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.shuffleProduct(this.productListData);
    }
  }

  handleNextImage = () => {
    this.slider.slickNext();
  };

  handlePrevImage = () => {
    this.slider.slickPrev();
  };

  handleShowMore = () => {
    this.setState({
      numberShowProduct:
        this.state.numberShowProduct + this.state.numberShowProduct
    });
  };

  shuffleProduct = (array: Array<object>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  getLocale = () => {
    return this.props.router.query.lang;
  };

  renderDesktop = () => (
    <Row type="flex" align="middle">
      <Col span={2}>
        <ImageControlIcon align="left" onClick={this.handlePrevImage}>
          <img src="/icons/angle-left.svg" width="8px" />
        </ImageControlIcon>
      </Col>
      <Col span={20}>
        <Slider ref={slider => (this.slider = slider)} {...this.state.settings}>
          {this.productListData.map((product, index) => {
            if (product.slug !== this.props.router.query.product) {
              return (
                <ProductContainer key={`img-viewed-${index}`}>
                  <ProductImageContainer>
                    <ProductImage
                      src={this.productDetailData[product.slug].cover_image}
                    />
                  </ProductImageContainer>
                  <ProductTitle>{product.name}</ProductTitle>
                  <LearnMoreButton>
                    <Link href={`/${this.getLocale()}/product/${product.slug}`}>
                      <a>
                        <Button>{this.props.t('product:learnMore')}</Button>
                      </a>
                    </Link>
                  </LearnMoreButton>
                </ProductContainer>
              );
            }
          })}
        </Slider>
      </Col>
      <Col span={2}>
        <ImageControlIcon align="right" onClick={this.handleNextImage}>
          <img src="/icons/angle-right.svg" width="8px" />
        </ImageControlIcon>
      </Col>
    </Row>
  );

  renderMobile = () => (
    <>
      <Row gutter={[16, 16]}>
        {this.productListData.map((product, index) => (
          <MoreProduct
            key={index}
            show={
              this.state.numberShowProduct >
              ~~(
                (index / this.state.numberShowProduct) *
                this.state.numberShowProduct
              )
            }
          >
            <Col span={12}>
              <ProductContainer>
                <ProductImageContainer>
                  <ProductImage
                    src={this.productDetailData[product.slug].cover_image}
                  />
                </ProductImageContainer>
                <ProductTitle>{product.name}</ProductTitle>
                <LearnMoreButton>
                  <Link href={`/${this.getLocale()}/product/${product.slug}`}>
                    <a>
                      <Button>{this.props.t('product:learnMore')}</Button>
                    </a>
                  </Link>
                </LearnMoreButton>
              </ProductContainer>
            </Col>
          </MoreProduct>
        ))}
      </Row>
      {this.state.numberProduct > this.state.numberShowProduct ? (
        <ShowMoreContainer onClick={this.handleShowMore}>
          <MoreText>{this.props.t('product:moreProduct')}</MoreText>
          <CaretDownIcon src="/icons/caret-down.svg" />
        </ShowMoreContainer>
      ) : (
        <></>
      )}
    </>
  );

  render() {
    const client = this.context;

    return (
      <PeopleAlsoViewedContainer>
        <Title>{this.props.t('product:peopleAlsoViewed')}</Title>
        <ProductListContainer>
          {client.mobileVersion ? this.renderMobile() : this.renderDesktop()}
        </ProductListContainer>
      </PeopleAlsoViewedContainer>
    );
  }
}

export default withRouter(withTranslation(PeopleAlsoViewed));
