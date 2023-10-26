import React, { Component } from 'react';

import Container from '../../../components/Container';
import Layout from '../../../components/Layout';
import PeopleAlsoViewed from '../../../containers/product/PeopleAlsoViewed';
import ProductDetail from '../../../containers/product/ProductDetail';
import { ClientContext } from '../../../contexts/ClientContext';

class Product extends Component {
  static contextType = ClientContext;

  render() {
    const client = this.context;

    client.setActivePath('/[lang]/product');

    return (
      <Layout>
        <Container>
          <ProductDetail />
          <PeopleAlsoViewed />
        </Container>
      </Layout>
    );
  }
}

export default Product;
