import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import styled from 'styled-components';
import { Button, Col, Row } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { ClientContext } from '../../contexts/ClientContext';
import withTranslation from '../../components/withTranslation';

interface Props extends WithRouterProps {
  t: any;
}

type ContentMoreProps = {
  showMore: boolean;
};

const AccessorizeContainer = styled.div`
  padding: 50px 0px;
`;

const ContentContainer = styled.div`
  padding-left: 40px;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 32px;
  color: #765e30;

  @media (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  color: #765e30;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Content = styled.p`
  text-align: justify;
  padding-top: 13px;
`;

const BottomContentContent = styled.div`
  padding-top: 28px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding-top: 10px;
  }
`;

const ViewProductButton = styled.div`
  padding-top: 10px;

  .ant-btn {
    border-radius: 11px;
    height: 44px;
    background-color: #923140;
    border-color: #923140;
    font-weight: bold;
    letter-spacing: 0.8px;
    color: #ffffff;

    :focus {
      border-color: #923140;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SocialContainer = styled.div`
  text-align: center;
`;

const Social = styled.img`
  margin-left: 15px;

  @media (max-width: 768px) {
    margin: 7.5px;
  }
`;

const ProductImageContainer = styled.div`
  .slick-dots li {
    margin: 0;
  }

  .slick-dots li button:before {
    font-size: 30px;
    color: #923140;
  }

  .slick-dots li.slick-active button:before {
    color: #923140;
  }
`;

const ProductImage = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const ContentMore = styled.span`
  display: ${(props: ContentMoreProps) => (props.showMore ? 'inline' : 'none')};
`;

const ShowMoreContainer = styled.div`
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

class Accessorize extends Component<Props> {
  static contextType = ClientContext;

  state = {
    showMore: false,
    settings: {
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      infinite: true,
      speed: 500,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false
          }
        }
      ]
    }
  };

  handleShowMore = () => {
    this.setState({ showMore: true });
  };

  getLocale = () => {
    return this.props.router.query.lang;
  };

  renderDesktop = () => {
    return (
      <AccessorizeContainer>
        <Row type="flex" align="middle">
          <Col span={12}>
            <ContentContainer>
              <Title>{this.props.t('index:shrink')}</Title>
              <SubTitle>{this.props.t('index:shrinkSub')}</SubTitle>
              <Content>{this.props.t('index:shrinkDetail1')}</Content>
              <Content>{this.props.t('index:shrinkDetail2')}</Content>
              <BottomContentContent>
                <Row type="flex" align="middle">
                  <Col span={12} lg={9} xl={7}>
                    <ViewProductButton>
                      <Link href={`/${this.getLocale()}/product`}>
                        <a>
                          <Button>{this.props.t('index:viewProduct')}</Button>
                        </a>
                      </Link>
                    </ViewProductButton>
                  </Col>
                  {/* <Col span={12} lg={15} xl={17}>
                    <Social src="/icons/facebook-blue.svg" width="10px" />
                    <Social src="/icons/instagram-blue.svg" width="20px" />
                    <Social src="/icons/pinterest-blue.svg" width="20px" />
                    <Social src="/icons/twitter-blue.svg" width="22px" />
                  </Col> */}
                </Row>
              </BottomContentContent>
            </ContentContainer>
          </Col>
          <Col span={12}>
            <ProductImageContainer>
              <Slider {...this.state.settings}>
                <ProductImage src="/images/shrink-film-11.jpg" />
                <ProductImage src="/images/shrink-film-12.jpg" />
                <ProductImage src="/images/shrink-film-07.jpg" />
                <ProductImage src="/images/shrink-film-08.jpg" />
                <ProductImage src="/images/shrink-film-09.jpg" />
                <ProductImage src="/images/shrink-film-10.jpg" />
              </Slider>
            </ProductImageContainer>
          </Col>
        </Row>
      </AccessorizeContainer>
    );
  };

  renderMobile = () => {
    const desc = this.props.t('index:accessorizeDetail');

    let idx = desc.length / 2;

    while (idx < desc.length && desc[idx].match(/\s/) == null) idx++;

    const desc1 = desc.substring(0, idx);
    const desc2 = desc.substring(idx);

    return (
      <AccessorizeContainer>
        <Row>
          <Col span={24}>
            <Slider {...this.state.settings}>
              <ProductImage src="/images/shrink-film-master-1.jpg" />
              <ProductImage src="/images/shrink-film-master-2.jpg" />
              {/* <ProductImage src="/images/shrink-film-master-3.jpg" /> */}
              <ProductImage src="/images/shrink-film-master-4.jpg" />
              <ProductImage src="/images/shrink-film-master-5.jpg" />
              {/* <ProductImage src="/images/product-1.png" />
              <ProductImage src="/images/product-1.png" /> */}
            </Slider>
          </Col>
          <Col span={24}>
            <ContentContainer>
              <Title>{this.props.t('index:accessorize')}</Title>
              <SubTitle>{this.props.t('index:accessorizeSub')}</SubTitle>
              <Content>
                {desc1}
                <ContentMore showMore={this.state.showMore}>
                  {desc2}
                </ContentMore>
              </Content>
              {!this.state.showMore ? (
                <ShowMoreContainer onClick={this.handleShowMore}>
                  <MoreText>{this.props.t('common:more')}</MoreText>
                  <CaretDownIcon src="/icons/caret-down.svg" />
                </ShowMoreContainer>
              ) : (
                <></>
              )}
              <BottomContentContent>
                <Row type="flex" align="middle">
                  <Col span={24}>
                    <SocialContainer>
                      <Social src="/icons/facebook-blue.svg" width="10px" />
                      <Social src="/icons/instagram-blue.svg" width="20px" />
                      <Social src="/icons/pinterest-blue.svg" width="20px" />
                      <Social src="/icons/twitter-blue.svg" width="22px" />
                    </SocialContainer>
                  </Col>
                  <Col span={24}>
                    <ViewProductButton>
                      <Link href={`/${this.getLocale()}/product`}>
                        <a>
                          <Button>{this.props.t('index:viewProduct')}</Button>
                        </a>
                      </Link>
                    </ViewProductButton>
                  </Col>
                </Row>
              </BottomContentContent>
            </ContentContainer>
          </Col>
        </Row>
      </AccessorizeContainer>
    );
  };

  render() {
    const client = this.context;

    return (
      <>{client.mobileVersion ? this.renderMobile() : this.renderDesktop()}</>
    );
  }
}

export default withRouter(withTranslation(Accessorize));
