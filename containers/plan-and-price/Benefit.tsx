import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import useTranslation from '../../hooks/useTranslation';

const BenefitContainer = styled.div`
  padding: 20px 20px 0px 20px;

  @media (min-width: 768px) {
    padding: 50px 20px;
    margin-top: 15px;
    margin-bottom: 30px;
    background-color: #f6f7f3;
    border-radius: 10px;
  }
`;

const Icon = styled.div`
  padding-bottom: 15px;
  text-align: center;
`;

const Title = styled.div`
  font-weight: bold;
  color: #765e30;
  text-align: center;
  font-size: 16px;
  padding-bottom: 5px;
`;

const Content = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    padding-bottom: 30px;
  }
`;

const Benefit = () => {
  const { t } = useTranslation();
  return (
    <BenefitContainer>
      <Row gutter={[32, 0]}>
        <Col span={24} md={8}>
          <Icon>
            <img src="/icons/security.svg" width="30px" />
          </Icon>
          <Title>{t('plan:transportation')}</Title>
          <Content>{t('plan:transportationDetail')}</Content>
        </Col>
        <Col span={24} md={8}>
          <Icon>
            <img src="/icons/credit-card.svg" width="50px" />
          </Icon>
          <Title>{t('plan:allow')}</Title>
          <Content>{t('plan:allowDetail')}</Content>
        </Col>
        <Col span={24} md={8}>
          <Icon>
            <img src="/icons/trend-up.svg" width="35px" />
          </Icon>
          <Title>{t('plan:sales')}</Title>
          <Content>{t('plan:salesDetail')}</Content>
        </Col>
      </Row>
    </BenefitContainer>
  );
};

export default Benefit;
