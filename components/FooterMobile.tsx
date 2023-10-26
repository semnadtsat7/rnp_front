import React, { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import Container from './Container';
import { LocaleContext } from '../contexts/LocaleContext';
import useTranslation from '../hooks/useTranslation';

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

const Social = styled.img`
  margin: 0px 15px;
`;

const FooterContainer = styled.footer`
  padding: 20px 0px;
  background-color: #765e30;
  color: #ffffff;

  a {
    color: #ffffff;

    :hover {
      color: #923140;
    }
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  padding: 15px 0px;
  text-align: center;
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 15px 0px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
`;

const CompanyText = styled.div`
  font-family: 'PT Serif';
  font-size: 18px;
`;

const CopyrightText = styled.div`
  font-size: 10px;
`;

const FooterMobile: React.FC = () => {
  const locale = useContext(LocaleContext);
  const { t } = useTranslation();
  return (
    <>
      <SocialContainer>
        <Social src="/icons/facebook-blue.svg" />
        <Social src="/icons/instagram-blue.svg" />
        <Social src="/icons/pinterest-blue.svg" />
        <Social src="/icons/twitter-blue.svg" />
      </SocialContainer>
      <FooterContainer>
        <Container>
          <Row type="flex" justify="center" align="top">
            {/* <Col span={12}>
              <MenuItem>
                <Link href={`/${locale.locale}/product`}>
                  <a>{t('header:product')}</a>
                </Link>
              </MenuItem>
            </Col>
            <Col span={12}>
              <MenuItem>
                <Link href={`/${locale.locale}/plan-and-price`}>
                  <a>{t('header:planAndPrice')}</a>
                </Link>
              </MenuItem>
            </Col>
            <Col span={12}>
              <MenuItem>
                <Link href={`/${locale.locale}/customer-support`}>
                  <a>{t('header:support')}</a>
                </Link>
              </MenuItem>
            </Col> */}
            <Col span={12}>
              <MenuItem>
                <Link href={`/${locale.locale}/contact`}>
                  <a>{t('header:contactUs')}</a>
                </Link>
              </MenuItem>
            </Col>
          </Row>
          <CompanyContainer>
            <Logo src="/logo/logo-white.svg" />
            <CompanyInfo>
            <CompanyText>ROONGNAPA PACKAGING</CompanyText>
                <CopyrightText>© 2020 by ROONGNAPA PACKAGING</CopyrightText>
            </CompanyInfo>
          </CompanyContainer>
        </Container>
      </FooterContainer>
    </>
  );
};

export default FooterMobile;
