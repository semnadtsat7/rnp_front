import React, { Component } from 'react';
import { NextPageContext } from 'next';

import Container from '../../components/Container';
import Layout from '../../components/Layout';
import SupportDetail from '../../containers/customer-support/SupportDetail';
import { ClientContext } from '../../contexts/ClientContext';

type Props = {
  pathname: string;
};

class CustomerSupport extends Component<Props> {
  static contextType = ClientContext;

  static async getInitialProps(ctx: NextPageContext) {
    const pathname = ctx.pathname;
    return { pathname };
  }

  render() {
    const client = this.context;

    client.setActivePath(this.props.pathname);

    return (
      <Layout>
        <Container>
          <SupportDetail />
        </Container>
      </Layout>
    );
  }
}

export default CustomerSupport;
