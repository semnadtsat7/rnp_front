import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

import useTranslation from '../../hooks/useTranslation';

const NewsletterContainer = styled.div`
  // padding: 30px 0px;
`;

const SubscribeContainer = styled.div`
  padding: 45px;
  background-color: antiquewhite;

  @media (max-width: 768px) {
    padding: 45px 15px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: #765e30;
  text-align: center;
`;

const SubTitle = styled.div`
  text-align: center;
  padding-top: 13px;
`;

const EmailInputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 26px;
  padding-bottom: 8px;
`;

const EmailInputField = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 8px 20px #6e540033;
  border-radius: 10px;
  opacity: 1;
  display: flex;
  align-items: center;
  width: 100%;

  @media (min-width: 576px) {
    width: 70%;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 35%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const MailSendIconContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    width: 16%;
  }
`;

const MailSendIcon = styled.img`
  width: 25px;
`;

const InputContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    width: 60%;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  border: none;

  :focus {
    outline: none;
  }

  @media (max-width: 576px) {
    padding-right: 10px;
  }
`;

const SendMailButtonContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    width: 24%;
  }
`;

const SendMailButton = styled.div`
  width: 100%;

  .ant-btn {
    width: 101%;
    height: 44px;
    border-radius: 10px;
    border-color: #923140;
    background-color: #923140;
  }
`;

const SendMailIcon = styled.img`
  width: 25px;
`;

const Newsletter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <NewsletterContainer>
      <SubscribeContainer>
        <Title>{t('index:newsletter')}</Title>
        <SubTitle>{t('index:newsletterSub')}</SubTitle>
        <EmailInputContainer>
          <EmailInputField>
            <MailSendIconContainer>
              <MailSendIcon src="/icons/mail-send.svg" />
            </MailSendIconContainer>
            <InputContainer>
              <EmailInput placeholder={t('contact:yourEmail')} />
            </InputContainer>
            <SendMailButtonContainer>
              <SendMailButton>
                <Button>
                  <SendMailIcon src="/icons/paper-rocket.svg" />
                </Button>
              </SendMailButton>
            </SendMailButtonContainer>
          </EmailInputField>
        </EmailInputContainer>
      </SubscribeContainer>
    </NewsletterContainer>
  );
};

export default Newsletter;
