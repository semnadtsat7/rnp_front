import React, { Component } from 'react';
import { NextPageContext } from 'next';

import Container from '../../../components/Container';
import Layout from '../../../components/Layout';
import AllProduct from '../../../containers/product/AllProduct';
import NewArrival from '../../../containers/product/NewArrival';
import { ClientContext } from '../../../contexts/ClientContext';

type Props = {
  pathname: string;
};

class Product extends Component<Props> {
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
          <NewArrival />
          <AllProduct />
        </Container>
      </Layout>
    );
  }
}

export default Product;
