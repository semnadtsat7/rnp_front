import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import { ClientContext } from '../contexts/ClientContext';

type Props = {
  children?: React.ReactNode;
};

const BodyContainer = styled.div`
  min-height: calc(100vh - 225px);
`;

class Layout extends Component<Props> {
  static contextType = ClientContext;

  componentDidMount() {
    this.detectResponsive();
    window.addEventListener('resize', this.detectResponsive);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.detectResponsive);
  }

  detectResponsive = () => {
    const responsive = this.context;

    if (window.innerWidth < 768) {
      responsive.setMobileVersion(true);
    } else {
      responsive.setMobileVersion(false);
    }
  };

  render() {
    return (
      <>
        <Header />
        <BodyContainer>{this.props.children}</BodyContainer>
        <Footer />
      </>
    );
  }
}

export default Layout;
