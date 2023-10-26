import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { createGlobalStyle } from 'styled-components';
import { Col, Menu, Popover, Row } from 'antd';
import useTranslation from '../hooks/useTranslation';

import Container from './Container';
import { ClientContext } from '../contexts/ClientContext';
import { LocaleContext } from '../contexts/LocaleContext';

const GlobalStyle = createGlobalStyle`
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    color: #ffffff !important;
    background-color: #923140 !important;
  }

  .ant-menu-vertical {
    border-right: 0;
    margin: 0px -16px;
    text-align: center;
  }

  .ant-popover {
    left: 30px !important;
    padding-top: 10px;
    width: calc(100% - 60px);
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 576px) {
      left: calc((100vw - 510px) / 2) !important;
      width: calc(540px - 30px);
    }
  }

  .ant-popover-placement-top {
    padding-bottom: 0
  }
`;

const NavBar = styled.div`
  padding: 5px;
`;

const MenuIcon = styled.img`
  text-align: left;
`;

const CompanyTitle = styled.div`
  font-family: 'PT Serif';
  font-size: 20px;
  text-align: center;
  vertical-align: center;
  color: #765e30;

  a {
    color: #775e31;

    :hover {
      color: #775e31 !important;
    }
  }
`;

const CompanyContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const CompanyLogo = styled.img`
  width: 45px;
  height: 40px;
`;

// const LoginText = styled.a`
//   display: flex;
//   justify-content: flex-end;
//   cursor: pointer;
//   color: #765e30;
//   font-size: 16px;

//   :hover {
//     color: #923140;
//   }
// `;

const MenuContainer = styled.div`
  a {
    color: #765e30;
  }

  .ant-menu-item-active {
    a {
      :hover {
        color: #923140;
      }
    }
  }

  .ant-menu-item-selected {
    color: #ffffff;

    a {
      color: #ffffff;

      :hover {
        color: #ffffff;
      }
    }
  }
`;

const LanguageSwitch = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
`;

const FlagImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
`;

const HeaderMobile: React.FC = () => {
  const { t } = useTranslation();
  const client = useContext(ClientContext);
  const locale = useContext(LocaleContext);
  const router = useRouter();

  const [menuVisible, setMenuVisible] = useState(false);

  const path = router.asPath.split('/');
  const asPath = `/${path.slice(2, path.length).join('/')}`;

  const menuContent = (
    <>
      <CompanyContainer>
        <CompanyLogo src="/logo/logo.svg" />
      </CompanyContainer>
      <MenuContainer>
        <Menu
          mode="vertical"
          defaultSelectedKeys={[client.activePath]}
          selectedKeys={[client.activePath]}
        >
          <Menu.Item key="/[lang]">
            <Link href={`/${locale.locale}`}>
              <a>{t('header:home')}</a>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="/[lang]/product">
            <Link href={`/${locale.locale}/product`}>
              <a>{t('header:product')}</a>
            </Link>
          </Menu.Item> */}
          <Menu.Item key="/[lang]/contact">
            <Link href={`/${locale.locale}/contact`}>
              <a>{t('header:contactUs')}</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/[lang]/customer-support">
            <Link href={`/${locale.locale}/customer-support`}>
              <a>{t('header:support')}</a>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="/[lang]/plan-and-price">
            <Link href={`/${locale.locale}/plan-and-price`}>
              <a>{t('header:planAndPrice')}</a>
            </Link>
          </Menu.Item> */}
        </Menu>
        <LanguageSwitch>
          <Link
            href={`/${locale.locale === 'en' ? 'th' : 'en'}${
              asPath === '/' ? '' : asPath
            }`}
          >
            {locale.locale === 'en' ? (
              <FlagImage src="/images/flags/th.png" />
            ) : (
              <FlagImage src="/images/flags/en.png" />
            )}
          </Link>
        </LanguageSwitch>
      </MenuContainer>
    </>
  );

  return (
    <Container>
      <GlobalStyle />
      <NavBar>
        <Row type="flex" justify="center" align="middle">
          <Col span={4}>
            <Popover
              content={menuContent}
              trigger="click"
              visible={menuVisible}
              onVisibleChange={setMenuVisible}
            >
              <MenuIcon src="/icons/menu-left.svg" />
            </Popover>
          </Col>
          <Col span={16}>
            <CompanyTitle>
              <Link href={`/${locale.locale}`}>
                <a>{t('header:rnp')}</a>
              </Link>
            </CompanyTitle>
          </Col>
          <Col span={4}>{/* <LoginText>Login</LoginText> */}</Col>
        </Row>
      </NavBar>
    </Container>
  );
};

export default HeaderMobile;
