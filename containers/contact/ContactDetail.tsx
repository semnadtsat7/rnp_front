import React from 'react';
import styled from 'styled-components';
import { Button, Col, Row } from 'antd';

import useTranslation from '../../hooks/useTranslation';

const ContactDetailContainer = styled.div`
  padding: 30px 0px;
  margin-top: 24px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  padding-bottom: 50px;
`;

const IconContainer = styled.div`
  position: absolute;
  padding-top: 3px;
`;

const Title = styled.div`
  padding-left: 45px;
  font-weight: bold;
  font-size: 22px;
  color: #765e30;
`;

const Content = styled.div`
  padding-top: 15px;
  padding-right: 30px;
  font-size: 14px;
`;

const ContactFormContainer = styled.div`
  background-color: #f6f7f3;
  min-height: 300px;
  border-radius: 10px;
  padding: 30px 40px;
`;

const InputFieldContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 8px 20px #6e540033;
  border-radius: 10px;
  height: 50px;
  padding: 10px 25px;
  margin-bottom: 20px;
  display: flex;
  align-content: center;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding-left: 40px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #c9c0ad;
  }
`;

const TextArea = styled.textarea`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 8px 20px #6e540033;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 150px;
  padding: 25px;
  resize: none;
  margin-bottom: 20px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #c9c0ad;
  }
`;

const SubmitButtonContainer = styled.div`
  text-align: center;

  .ant-btn {
    border-radius: 11px;
    height: 44px;
    padding: 0px 40px;
    background-color: #923140;
    border-color: #923140;
    font-weight: bold;
    letter-spacing: 0.8px;
    color: #ffffff;

    :focus {
      border-color: #923140;
    }
  }
`;

const ContactDetail = () => {
  const { t } = useTranslation();

  return (
    <ContactDetailContainer>
      <Row>
        <Col span={24} md={12}>
          <ContactContainer>
            <ContentContainer>
              <IconContainer>
                <img src="/icons/user-voice.svg" width="30px" />
              </IconContainer>
              <Title>{t('contact:customerService')}</Title>
              <Content>
                {t('contact:detail')}
                <br />
                <br />
                {t('contact:tel')}
                <br />
                {t('contact:line')}
                <br />
                {t('contact:serviceAvailable')}
                <br />
                {t('contact:email')}
              </Content>
            </ContentContainer>
            <ContentContainer>
              <IconContainer>
                <img src="/icons/location-point.svg" width="25px" />
              </IconContainer>
              <Title>{t('common:addressTitle')}</Title>
              <Content>
                {t('common:companyName')}
                <br />
                {t('common:address')}
              </Content>
            </ContentContainer>
          </ContactContainer>
        </Col>
        <Col span={24} md={12}>
          <ContactFormContainer>
            <InputFieldContainer>
              <IconContainer>
                <img src="/icons/user.svg" width="20px" />
              </IconContainer>
              <Input
                placeholder={t('contact:yourName')}
                onChange={e => console.log(e.target.value)}
              />
            </InputFieldContainer>
            <InputFieldContainer>
              <IconContainer>
                <img src="/icons/mail-send-brown.svg" width="22px" />
              </IconContainer>
              <Input
                placeholder={t('contact:yourEmail')}
                onChange={e => console.log(e.target.value)}
              />
            </InputFieldContainer>
            <InputFieldContainer>
              <IconContainer>
                <img src="/icons/phone.svg" width="20px" />
              </IconContainer>
              <Input
                placeholder={t('contact:yourPhone')}
                onChange={e => console.log(e.target.value)}
              />
            </InputFieldContainer>
            <TextArea
              placeholder={t('contact:typeMessage')}
              onChange={e => console.log(e.target.value)}
            />
            <SubmitButtonContainer>
              <Button>{t('contact:submit')}</Button>
            </SubmitButtonContainer>
          </ContactFormContainer>
        </Col>
      </Row>
    </ContactDetailContainer>
  );
};

export default ContactDetail;
