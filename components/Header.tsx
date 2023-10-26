import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { ClientContext } from '../contexts/ClientContext';

const HeaderContainer = styled.header`
  padding-top: 15px;
`;

class Header extends Component {
  static contextType = ClientContext;

  render() {
    const responsive = this.context;

    return (
      <HeaderContainer>
        {responsive.mobileVersion ? <HeaderMobile /> : <HeaderDesktop />}
      </HeaderContainer>
    );
  }
}

export default Header;
