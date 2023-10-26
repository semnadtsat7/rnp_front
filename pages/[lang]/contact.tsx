import React, { Component } from 'react';
import { NextPageContext } from 'next';

import Container from '../../components/Container';
import Layout from '../../components/Layout';
import ContactDetail from '../../containers/contact/ContactDetail';
import { ClientContext } from '../../contexts/ClientContext';

type Props = {
  pathname: string;
};

class Contact extends Component<Props> {
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
          <ContactDetail />
        </Container>
      </Layout>
    );
  }
}

export default Contact;
