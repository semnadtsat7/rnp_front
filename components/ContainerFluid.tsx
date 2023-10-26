import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
};

const ContainerWrapper = styled.div`
  width: calc(100% - 30px);
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Container = (props: Props) => {
  return <ContainerWrapper>{props.children}</ContainerWrapper>;
};

export default Container;
