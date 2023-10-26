import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import styled from 'styled-components';
import { Button, Col, Row } from 'antd';

import ProductDetailData from '../../assets/data/product-detail.json';
import withTranslation from '../../components/withTranslation';
import { ClientContext } from '../../contexts/ClientContext';

interface Props extends WithRouterProps {
  t: any;
}

type ContentMoreProps = {
  showMore: boolean;
};

const NewArrivalContainer = styled.div`
  padding: 30px 0px;
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
  font-size: 50px;
  color: #765e30;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`;

const SubTitle = styled.div`
  font-size: 30px;
  color: #765e30;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 20px;
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

const LearnMoreButton = styled.div`
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
  display: flex;
  justify-content: center;
`;

const ProductImage = styled.img`
  width: 80%;
  max-height: 260px;

  @media (max-width: 768px) {
    max-height: 200px;
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

class NewArrival extends Component<Props> {
  static contextType = ClientContext;

  state = {
    showMore: false
  };
  productDetailData: any = ProductDetailData;

  handleShowMore = () => {
    this.setState({ showMore: true });
  };

  getLocale = () => {
    return this.props.router.query.lang;
  };

  renderDesktop = () => {
    return (
      <NewArrivalContainer>
        <Row type="flex" align="middle">
          <Col span={12}>
            <ContentContainer>
              <Title>{this.props.t('product:newArrival')}</Title>
              <SubTitle>
                {
                  this.productDetailData[
                    Object.keys(this.productDetailData)[
                      Object.keys(this.productDetailData).length - 1
                    ]
                  ].name_en
                }
              </SubTitle>
              <Content>
                {this.getLocale() === 'en'
                  ? this.productDetailData[
                      Object.keys(this.productDetailData)[
                        Object.keys(this.productDetailData).length - 1
                      ]
                    ].desc_en
                  : this.productDetailData[
                      Object.keys(this.productDetailData)[
                        Object.keys(this.productDetailData).length - 1
                      ]
                    ].desc_th}
              </Content>
              <BottomContentContent>
                <Row type="flex" align="middle">
                  <Col span={12} lg={9} xl={7}>
                    <LearnMoreButton>
                      <Link
                        href={`/${this.getLocale()}/product/ldpe-heat-shrink-film`}
                      >
                        <a>
                          <Button>{this.props.t('product:learnMore')}</Button>
                        </a>
                      </Link>
                    </LearnMoreButton>
                  </Col>
                  <Col span={12} lg={15} xl={17}>
                    <Social src="/icons/facebook-blue.svg" width="10px" />
                    <Social src="/icons/instagram-blue.svg" width="20px" />
                    <Social src="/icons/pinterest-blue.svg" width="20px" />
                    <Social src="/icons/twitter-blue.svg" width="22px" />
                  </Col>
                </Row>
              </BottomContentContent>
            </ContentContainer>
          </Col>
          <Col span={12}>
            <ProductImageContainer>
              <ProductImage src="/images/ldpe-heat.png" />
            </ProductImageContainer>
          </Col>
        </Row>
      </NewArrivalContainer>
    );
  };

  renderMobile = () => {
    let desc;
    if (this.getLocale() === 'en') {
      desc = this.productDetailData[
        Object.keys(this.productDetailData)[
          Object.keys(this.productDetailData).length - 1
        ]
      ].desc_en;
    } else {
      desc = this.productDetailData[
        Object.keys(this.productDetailData)[
          Object.keys(this.productDetailData).length - 1
        ]
      ].desc_th;
    }
    let idx = desc.length / 2;

    while (idx < desc.length && desc[idx].match(/\s/) == null) idx++;

    const desc1 = desc.substring(0, idx);
    const desc2 = desc.substring(idx);

    return (
      <NewArrivalContainer>
        <Row>
          <Col span={24}>
            <ProductImageContainer>
              <ProductImage src="/images/ldpe-heat.png" />
            </ProductImageContainer>
          </Col>
          <Col span={24}>
            <ContentContainer>
              <Title>{this.props.t('product:newArrival')}</Title>
              <SubTitle>
                {
                  this.productDetailData[
                    Object.keys(this.productDetailData)[
                      Object.keys(this.productDetailData).length - 1
                    ]
                  ].name_en
                }
              </SubTitle>
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
                    <LearnMoreButton>
                      <Link
                        href={`/${this.getLocale()}/product/ldpe-heat-shrink-film`}
                      >
                        <a>
                          <Button>{this.props.t('product:learnMore')}</Button>
                        </a>
                      </Link>
                    </LearnMoreButton>
                  </Col>
                </Row>
              </BottomContentContent>
            </ContentContainer>
          </Col>
        </Row>
      </NewArrivalContainer>
    );
  };

  render() {
    const client = this.context;

    return (
      <>{client.mobileVersion ? this.renderMobile() : this.renderDesktop()}</>
    );
  }
}

export default withRouter(withTranslation(NewArrival));
