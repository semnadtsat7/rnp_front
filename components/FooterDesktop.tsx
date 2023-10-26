import React, { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import Container from './Container';
import { LocaleContext } from '../contexts/LocaleContext';
import useTranslation from '../hooks/useTranslation';
const FooterContainer = styled.footer`
  max-height: 105px;
  padding: 30px 0px;
  background-color: #765e30;
  color: #ffffff;
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
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

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 992px) {
    font-size: 20px;
  }
`;

const CopyrightText = styled.div`
  @media (min-width: 768px) {
    font-size: 8px;
  }

  @media (min-width: 992px) {
    font-size: 11px;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MenuItem = styled.div`
  a {
    color: #ffffff;

    :hover {
      color: #923140;
    }
  }

  @media (min-width: 768px) {
    margin-left: 4%;
  }

  @media (min-width: 992px) {
    margin-right: 5%;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 40px;
`;

const Social = styled.img`
  cursor: pointer;
  margin-left: 15%;
`;

const FooterDesktop: React.FC = () => {
  const locale = useContext(LocaleContext);
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <Container>
        <Row type="flex" align="middle" justify="center">
          <Col span={5}>
            <CompanyContainer>
              <Logo src="/logo/logo-white.svg" />
              <CompanyInfo>
                <CompanyText>ROONGNAPA</CompanyText>
                <CopyrightText>© 2020 by Roongnapa</CopyrightText>
              </CompanyInfo>
            </CompanyContainer>
          </Col>
          <Col span={16}>
            <Menu>
              {/* <MenuItem>
                <Link href={`/${locale.locale}/product`}>
                  <a>{t('header:product')}</a>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href={`/${locale.locale}/plan-and-price`}>
                  <a>{t('header:planAndPrice')}</a>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href={`/${locale.locale}/customer-support`}>
                  <a>{t('header:support')}</a>
                </Link>
              </MenuItem> */}
              <MenuItem>
                <Link href={`/${locale.locale}/contact`}>
                  <a>{t('header:contactUs')}</a>
                </Link>
              </MenuItem>
            </Menu>
          </Col>
          <Col span={3}>
            <SocialContainer>
              <Social src="/icons/facebook-white.svg" width="10px" />
              <Social src="/icons/instagram-white.svg" width="20px" />
              <Social src="/icons/pinterest-white.svg" width="20px" />
              <Social src="/icons/twitter-white.svg" width="20px" />
            </SocialContainer>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default FooterDesktop;
