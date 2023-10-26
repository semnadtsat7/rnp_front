import React, { Component } from 'react';

import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';
import { ClientContext } from '../contexts/ClientContext';

class Footer extends Component {
  static contextType = ClientContext;

  render() {
    const responsive = this.context;

    return (
      <>{responsive.mobileVersion ? <FooterMobile /> : <FooterDesktop />}</>
    );
  }
}

export default Footer;
