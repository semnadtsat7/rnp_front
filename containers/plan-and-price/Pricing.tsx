import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import useTranslation from '../../hooks/useTranslation';

type PlanContainerProps = {
  align?: string;
};

const PlanAndPriceContainer = styled.div`
  padding-top: 30px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #765e30;
`;

const SubTitle = styled.div`
  padding-top: 15px;
  text-align: center;
`;

const AllPlanContainer = styled.div`
  padding: 15px;
`;

const PlanContainer = styled.div`
  display: flex;
  justify-content: ${(props: PlanContainerProps) => {
    switch (props.align) {
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
      default:
        return 'flex-start';
    }
  }};
  padding-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: center !important;
  }
`;

const ContentContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 8px 20px #6e540033;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const PlanTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 15px 0px;
  background-color: #fae3b5;
  border-radius: 10px 10px 0px 0px;
`;

const PlanDetail = styled.div`
  width: 300px;
  padding: 25px 0px;
`;

const Pieces = styled.div`
  font-size: 14px;
`;

const DiscountText = styled.div`
  font-weight: bold;
  font-size: 38px;
`;

const FreeShippingText = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #923140;
`;

const PlanAndPrice = () => {
  const { t } = useTranslation();

  return (
    <PlanAndPriceContainer>
      <Title>{t('plan:planAndPrice')}</Title>
      <SubTitle>{t('plan:planAndPriceDetail')}</SubTitle>
      <AllPlanContainer>
        <Row gutter={[32, 0]} type="flex" justify="center" align="middle">
          <Col span={24} md={12}>
            <PlanContainer align="right">
              <ContentContainer>
                <PlanTitle>{t('plan:retail')}</PlanTitle>
                <PlanDetail>
                  <Pieces>{t('plan:moreThan50')}</Pieces>
                  <DiscountText>{t('plan:disc5')}</DiscountText>
                  <FreeShippingText>{t('plan:freeShippping')}</FreeShippingText>
                </PlanDetail>
              </ContentContainer>
            </PlanContainer>
          </Col>
          <Col span={24} md={12}>
            <PlanContainer>
              <ContentContainer>
                <PlanTitle>{t('plan:wholesale')}</PlanTitle>
                <PlanDetail>
                  <Pieces>{t('plan:moreThan1000')}</Pieces>
                  <DiscountText>{t('plan:disc15')}</DiscountText>
                  <FreeShippingText>{t('plan:freeShippping')}</FreeShippingText>
                </PlanDetail>
              </ContentContainer>
            </PlanContainer>
          </Col>
        </Row>
      </AllPlanContainer>
    </PlanAndPriceContainer>
  );
};

export default PlanAndPrice;
