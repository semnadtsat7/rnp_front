import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Col, Menu, Row } from 'antd';

import Container from './Container';
import { ClientContext } from '../contexts/ClientContext';
import { LocaleContext } from '../contexts/LocaleContext';
import useTranslation from '../hooks/useTranslation';

const HeaderContainer = styled.div`
  max-height: 120px;
  padding-top: 15px;
`;

const CompanyTitle = styled.div`
  position: relative;
  // font-family: 'PT Serif';
  font-size: 30px;
  text-align: center;
  color: #765e30;
  margin-bottom: 15px;

  a {
    color: #775e31;

    :hover {
      color: #775e31 !important;
    }
  }
`;

const NavBar = styled.div`
  .ant-row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Logo = styled.img`
  // width: 40px;
  // height: 40px;
`;

const MenuContainer = styled.div`
  a {
    :hover {
      color: #923140 !important;
    }
  }

  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open {
    color: #923140;
  }

  .ant-menu-horizontal {
    border-bottom: none;
    text-align: center;
  }

  .ant-menu-item {
    border-bottom: none;
    color: #765e30;
    font-size: 16px;

    a {
      color: #765e30;
    }

    :active {
      color: #923140;
    }

    :hover {
      color: #923140;
      border-bottom: none;
    }
  }

  .ant-menu-item-active {
    a {
      :hover {
        color: #923140;
      }
    }
  }

  .ant-menu-item-selected {
    color: #923140;

    a {
      color: #923140;
    }
  }

  .ant-menu-submenu {
    border-bottom: none;

    :hover {
      color: #923140;
      border-bottom: none;
    }
  }

  .ant-menu-submenu-title {
    :hover {
      color: #923140;
    }

    :focus {
      color: #923140;
    }
  }

  .ant-menu-submenu-open {
    color: #923140;
    border-bottom: none;

    :hover {
      color: #923140;
      border-bottom: none;
    }

    :active {
      color: #923140;
      border-bottom: none;
    }
  }

  .ant-menu-submenu-selected {
    color: #923140;
    border-bottom: none;
  }
`;

const LoginText = styled.a`
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  color: #765e30;
  cursor: pointer;

  :hover {
    color: #923140;
  }
`;

const LanguageSwitch = styled.div`
  position: absolute;
  right: 8px;
  top: 0;
`;

const FlagImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
`;

const HeaderDesktop: React.FC = () => {
  const { t } = useTranslation();
  const client = useContext(ClientContext);
  const locale = useContext(LocaleContext);
  const router = useRouter();

  const path = router.asPath.split('/');
  const asPath = `/${path.slice(2, path.length).join('/')}`;

  return (
    <>
      <HeaderContainer>
        <Container>
          <CompanyTitle>
            <Link href={`/${locale.locale}`}>
              <a>{t('header:rnp')}</a>
            </Link>
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
          </CompanyTitle>
          <NavBar>
            <Row align="middle" justify="center">
              <Col span={3}>
                <LogoContainer>
                  <Logo src="/logo/logo.svg" />
                </LogoContainer>
              </Col>
              <Col span={18}>
                <MenuContainer>
                  <Menu
                    mode="horizontal"
                    defaultSelectedKeys={[client.activePath]}
                    selectedKeys={[client.activePath]}
                  >
                    <Menu.Item key="/[lang]">
                      <Link href={`/${locale.locale}`}>
                        <a>{t('header:home')}</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="/[lang]/product">
                      <Link href={`/${locale.locale}/product`}>
                        <a>{t('header:product')}</a>
                      </Link>
                    </Menu.Item>
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
                    <Menu.Item key="/[lang]/plan-and-price">
                      <Link href={`/${locale.locale}/plan-and-price`}>
                        <a>{t('header:planAndPrice')}</a>
                      </Link>
                    </Menu.Item>
                  </Menu>
                </MenuContainer>
              </Col>
              <Col span={3}>{/* <LoginText>Login</LoginText> */}</Col>
            </Row>
          </NavBar>
        </Container>
      </HeaderContainer>
    </>
  );
};

export default HeaderDesktop;
