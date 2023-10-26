import React, { Component } from 'react';
import { NextPageContext } from 'next';

import Container from '../../components/Container';
import Layout from '../../components/Layout';
import Benefit from '../../containers/plan-and-price/Benefit';
import Pricing from '../../containers/plan-and-price/Pricing';
import { ClientContext } from '../../contexts/ClientContext';

type Props = {
  pathname: string;
};

class PlanAndPrice extends Component<Props> {
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
          <Pricing />
          <Benefit />
        </Container>
      </Layout>
    );
  }
}

export default PlanAndPrice;
