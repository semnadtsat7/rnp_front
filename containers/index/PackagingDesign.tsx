import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
// import HoverImage from 'react-hover-image';

import useTranslation from '../../hooks/useTranslation';

const PackagingDesignContainer = styled.div`
  margin-top: 20px;
  padding: 50px 0px;
  @media (max-width: 768px) {
    padding: 30px 0px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: #765e30;
  text-align: center;
`;

const ProductContainer = styled.div`
  padding-top: 30px;

  @media (max-width: 768px) {
    padding-top: 13px;
  }
`;

const ProductWrapper = styled.div`
  img:last-child {
    display: none;
  }
  &:hover img:last-child {
    display: block;
  }
  &:hover img:first-child {
    display: none;
  }
`;

const ProductImage = styled.img`
  width: 100%;
`;
const ProductTag = styled.b`
position: absolute;
    top: 15px;
    left: 15px;
    /* background-color: aqua; */
    padding: 4px 8px;
    border-radius: 7px;
    background-color: rgba(255, 0, 0, 0.1);
}

`;

const PackagingDesign: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PackagingDesignContainer>
      <Title>{t('index:packagingDesign')}</Title>
      <ProductContainer>
        <Row gutter={[16, 16]}>
          <Col xs={12} md={8} lg={6}>
            <ProductWrapper>
              <ProductImage src="/images/product-cover-i-1.jpg" />
              <ProductImage src="/images/product-cover-i-2.jpg" />
            </ProductWrapper>
            <ProductTag>shink film</ProductTag>
          </Col>
          <Col xs={12} md={8} lg={6}>
            <ProductWrapper>
              <ProductImage src="/images/product-cover-c-1.jpg" />
              <ProductImage src="/images/product-cover-c-2.jpg" />
            </ProductWrapper>
            <ProductTag>label</ProductTag>
          </Col>
          <Col xs={12} md={8} lg={6}>
            <ProductWrapper>
              <ProductImage src="/images/product-cover-d-1.jpg" />
              <ProductImage src="/images/product-cover-d-2.jpg" />
            </ProductWrapper>
            <ProductTag>laminate bag</ProductTag>
          </Col>
          <Col xs={12} md={8} lg={6}>
            <ProductWrapper>
              <ProductImage src="/images/product-cover-b-1.jpg" />
              <ProductImage src="/images/product-cover-b-2.jpg" />
            </ProductWrapper>
          </Col>
          <Col xs={12} md={8} lg={6}>
            <ProductWrapper>
              <ProductImage src="/images/product-cover-g-1.jpg" />
              <ProductImage src="/images/product-cover-g-2.jpg" />
            </ProductWrapper>
          </Col>
          <Col xs={12} md={8} lg={6}>
            {/* <ProductWrapper> */}
            {/* <ProductImage src="/images/product-cover-e-1.jpg" /> */}
            <ProductImage src="/images/product-cover-e-1.jpg" />
            {/* </ProductWrapper> */}
          </Col>
          <Col xs={12} md={8} lg={6}>
            <ProductWrapper>
              <ProductImage src="/images/product-cover-f-1.jpg" />
              <ProductImage src="/images/product-cover-f-2.jpg" />
            </ProductWrapper>
          </Col>
          <Col xs={12} md={8} lg={6}>
            <ProductWrapper>
              <ProductImage src="/images/product-cover-h-1.jpg" />
              <ProductImage src="/images/product-cover-h-2.jpg" />
            </ProductWrapper>
          </Col>
          {/* <Col xs={12} md={8} lg={6}>
            <ProductImage src="/images/product-4.png" />
          </Col>
          <Col xs={12} md={8} lg={6}>
            <ProductImage src="/images/product-5.png" />
          </Col>
          <Col xs={12} md={8} lg={6}>
            <ProductImage src="/images/product-6.png" />
          </Col>
          <Col xs={12} md={8} lg={6}>
            <ProductImage src="/images/product-7.png" />
          </Col>
          <Col xs={12} md={8} lg={6}>
            <ProductImage src="/images/product-8.png" />
          </Col>
          <Col xs={12} md={8} lg={6}>
            <ProductImage src="/images/product-9.png" />
          </Col>
          <Col xs={12} md={8} lg={6}>
            <ProductImage src="/images/product-10.png" />
          </Col> */}
        </Row>
      </ProductContainer>
    </PackagingDesignContainer>
  );
};

export default PackagingDesign;
