import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import styled from 'styled-components';
import { Button, Col, Row } from 'antd';

import ProductListData from '../../assets/data/product-list.json';
import ProductDetailData from '../../assets/data/product-detail.json';
import withTranslation from '../../components/withTranslation';
import { ClientContext } from '../../contexts/ClientContext';

interface Props extends WithRouterProps {
  t: any;
}

type ContentMoreProps = {
  show: boolean;
};

const AllProductContainer = styled.div`
  padding: 30px 0px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: #765e30;
  text-align: center;
`;

const ProductListContainer = styled.div`
  padding-top: 30px;

  @media (max-width: 768px) {
    padding-top: 13px;
  }
`;

const ProductContainer = styled.div`
  box-shadow: 0px 8px 15px #e7eaf0;
  border-radius: 10px;
  height: 315px;
  padding: 30px 30px 0px 30px;
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

class AllProduct extends Component<Props> {
  static contextType = ClientContext;

  state = {
    numberProduct: ProductListData.length,
    numberShowProduct: 6
  };
  productDetailData: any = ProductDetailData;
  productListData = ProductListData;

  handleShowMore = () => {
    this.setState({
      numberShowProduct:
        this.state.numberShowProduct + this.state.numberShowProduct
    });
  };

  getLocale = () => {
    return this.props.router.query.lang;
  };

  renderDesktop = () => {
    return (
      <AllProductContainer>
        <Title>{this.props.t('product:all')}</Title>
        <ProductListContainer>
          <Row gutter={[16, 32]}>
            {this.productListData.map((product, index) => (
              <Col span={8} key={index}>
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
            ))}
          </Row>
        </ProductListContainer>
      </AllProductContainer>
    );
  };

  renderMobile = () => (
    <AllProductContainer>
      <Title>{this.props.t('product:all')}</Title>
      <ProductListContainer>
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
      </ProductListContainer>
    </AllProductContainer>
  );

  render() {
    const client = this.context;

    return (
      <>{client.mobileVersion ? this.renderMobile() : this.renderDesktop()}</>
    );
  }
}

export default withRouter(withTranslation(AllProduct));
