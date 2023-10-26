import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import useTranslation from '../../hooks/useTranslation';

const SupportDetailContainer = styled.div`
  padding: 30px 0px;
`;

const SupportContainer = styled.div`
  background-color: #f6f7f3;
  padding: 30px;
  border-radius: 5px;
`;

const DetailContainer = styled.div`
  padding-left: 50px;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 3px;
  left: 0;
`;

const Icon = styled.img`
  width: 30px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #775e31;
`;

const Content = styled.div`
  padding-top: 10px;
  text-align: justify;
  width: 85%;
`;

const ActionContainer = styled.div`
  padding-top: 15px;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-content: flex-end;
`;

const ActionIcon = styled.img`
  width: 20px;
  margin-left: 15px;
  cursor: pointer;
`;

const SupportDetail = () => {
  const { t } = useTranslation();

  return (
    <SupportDetailContainer>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <SupportContainer>
            <Row>
              <Col>
                <IconContainer>
                  <Icon src="/icons/truck.svg" />
                </IconContainer>
                <DetailContainer>
                  <ContentContainer>
                    <Title>{t('support:shipping')}</Title>
                    <Content>{t('support:shippingDetail')}</Content>
                  </ContentContainer>
                  <ActionContainer>
                    <ActionIcon src="/icons/file-download.svg" />
                    <ActionIcon src="/icons/print.svg" />
                  </ActionContainer>
                </DetailContainer>
              </Col>
            </Row>
          </SupportContainer>
        </Col>
        <Col span={24}>
          <SupportContainer>
            <Row>
              <Col>
                <IconContainer>
                  <Icon src="/icons/money-exchange.svg" />
                </IconContainer>
                <DetailContainer>
                  <ContentContainer>
                    <Title>{t('support:return')}</Title>
                    <Content>{t('support:returnDetail')}</Content>
                  </ContentContainer>
                  <ActionContainer>
                    <ActionIcon src="/icons/file-download.svg" />
                    <ActionIcon src="/icons/print.svg" />
                  </ActionContainer>
                </DetailContainer>
              </Col>
            </Row>
          </SupportContainer>
        </Col>
        <Col span={24}>
          <SupportContainer>
            <Row>
              <Col>
                <IconContainer>
                  <Icon src="/icons/receipt.svg" />
                </IconContainer>
                <DetailContainer>
                  <ContentContainer>
                    <Title>{t('support:tracking')}</Title>
                    <Content>{t('support:trackingDetail')}</Content>
                  </ContentContainer>
                  <ActionContainer>
                    <ActionIcon src="/icons/file-download.svg" />
                    <ActionIcon src="/icons/print.svg" />
                  </ActionContainer>
                </DetailContainer>
              </Col>
            </Row>
          </SupportContainer>
        </Col>
        <Col span={24}>
          <SupportContainer>
            <Row>
              <Col>
                <IconContainer>
                  <Icon src="/icons/money-circle.svg" />
                </IconContainer>
                <DetailContainer>
                  <ContentContainer>
                    <Title>{t('support:moneyBack')}</Title>
                    <Content>{t('support:moneyBackDetail')}</Content>
                  </ContentContainer>
                  <ActionContainer>
                    <ActionIcon src="/icons/file-download.svg" />
                    <ActionIcon src="/icons/print.svg" />
                  </ActionContainer>
                </DetailContainer>
              </Col>
            </Row>
          </SupportContainer>
        </Col>
        <Col span={24}>
          <SupportContainer>
            <Row>
              <Col>
                <IconContainer>
                  <Icon src="/icons/shield-check.svg" />
                </IconContainer>
                <DetailContainer>
                  <ContentContainer>
                    <Title>{t('support:secure')}</Title>
                    <Content>{t('support:secureDetail')}</Content>
                  </ContentContainer>
                  <ActionContainer>
                    <ActionIcon src="/icons/file-download.svg" />
                    <ActionIcon src="/icons/print.svg" />
                  </ActionContainer>
                </DetailContainer>
              </Col>
            </Row>
          </SupportContainer>
        </Col>
      </Row>
    </SupportDetailContainer>
  );
};

export default SupportDetail;
