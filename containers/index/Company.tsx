import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
// import HoverImage from 'react-hover-image';

import useTranslation from '../../hooks/useTranslation';

const PackagingDesignContainer = styled.div`
  padding: 50px 0px;

  @media (max-width: 768px) {
    padding: 30px 0px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
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
      {/* <Title>{t('index:companyName')}</Title> */}
      <ProductContainer>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={24} lg={24}>
            <Title>
              บริษัท รุ่งณภา แพคเกจจิ่้ง จำกัด
              เป็นผู้ผลิตและจำหน่ายงานพิมพ์กราเวีย  (Gravure) บนพลาสติกชนิดอ่อน ม้วนฟิล์มบรรจุเครื่องอัตโนมัติและซองพลาสติกที่ประกอบไปด้วยฟิล์ม PET, MPET, OPP, CPP, MCPP, OPP-MATT, NYLON, LLDPE และALUMINIUM ใส่ใจทุกกระบวนผลิต เพื่อผลิตงานที่มีคุณภาพให้กับลูกค้า
            </Title>
          </Col>
        </Row>
      </ProductContainer>
    </PackagingDesignContainer>
  );
};

export default PackagingDesign;
