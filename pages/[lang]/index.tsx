import React, { Component } from 'react';
import { NextPageContext } from 'next';
import styled from 'styled-components';

import Container from '../../components/Container';
import Layout from '../../components/Layout';
import Accessorize from '../../containers/index/Accessorize';
import DesignYourBrand from '../../containers/index/DesignYourBrand';
import LaminateBag from '../../containers/index/LaminateBag';
import Newsletter from '../../containers/index/Newsletter';
import PackagingDesign from '../../containers/index/PackagingDesign';
import Company from '../../containers/index/Company';
import { ClientContext } from '../../contexts/ClientContext';
import { isLanguageSupport } from '../../utils/i18n';

type Props = {
  pathname: string;
};

const DesighWrapper = styled.div`
  background-color: antiquewhite;
`;

const NewsWrapper = styled.div`
  background-color: antiquewhite;
`;

class Home extends Component<Props> {
  static contextType = ClientContext;

  static async getInitialProps(ctx: NextPageContext) {
    const pathname = ctx.pathname;

    if (ctx.res && !isLanguageSupport(ctx.query.lang)) {
      ctx.res.writeHead(301, {
        Location: `en${ctx.asPath}`
      });
      ctx.res.end();
    }

    return { pathname };
  }

  render() {
    const client = this.context;

    client.setActivePath(this.props.pathname);

    return (
      <Layout>
        {/* <DesighWrapper> */}
        <Container>
          <Company />
        </Container>
        {/* </DesighWrapper> */}
        <Container>
          <LaminateBag />
          <DesignYourBrand />
          <Accessorize />
        </Container>
        <DesighWrapper>
          <Container>
            <PackagingDesign />
          </Container>
        </DesighWrapper>
        <NewsWrapper>
          <Container>
            <Newsletter />
          </Container>
        </NewsWrapper>
      </Layout>
    );
  }
}

export default Home;
