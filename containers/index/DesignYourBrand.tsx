import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import { ClientContext } from '../../contexts/ClientContext';
import withTranslation from '../../components/withTranslation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
type Props = {
  t: any;
};

type ContentMoreProps = {
  showMore: boolean;
};

const DesignYourBrandContainer = styled.div`
  padding: 30px 0px;
`;

// const ProductImageContainer = styled.div``;

const ProductImage = styled.img`
  width: 95%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  padding-left: 20px;
  padding-right: 40px;

  @media (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 16px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 32px;
  color: #765e30;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Content = styled.div`
  text-align: justify;
  padding-top: 15px;

  @media (max-width: 768px) {
    padding-top: 8px;
  }
`;

const ContentMore = styled.span`
  display: ${(props: ContentMoreProps) => (props.showMore ? 'inline' : 'none')};
`;

const ShowMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MoreText = styled.div`
  font-size: 12px;
`;

const CaretDownIcon = styled.img`
  width: 15px;
`;

const ProductImageContainer = styled.div`
  .slick-dots li {
    margin: 0;
  }

  .slick-dots li button:before {
    font-size: 30px;
    color: #923140;
  }

  .slick-dots li.slick-active button:before {
    color: #923140;
  }
`;

class DesignYourBrand extends Component<Props> {
  static contextType = ClientContext;

  state = {
    showMore: false,
    settings: {
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      infinite: true,
      speed: 500,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false
          }
        }
      ]
    }
  };

  handleShowMore = () => {
    this.setState({ showMore: true });
  };

  renderContentDesktop = () => {
    return (
      <Content>
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.t('index:designDetail')
          }}
        />
      </Content>
    );
  };

  renderContentMobile = () => {
    const desc = this.props.t('index:designDetail');

    let idx = desc.length / 2;

    while (idx < desc.length && desc[idx].match(/\s/) == null) idx++;

    const desc1 = desc.substring(0, idx);
    const desc2 = desc.substring(idx);

    return (
      <>
        <Content>
          <span
            dangerouslySetInnerHTML={{
              __html: desc1
            }}
          />
          <ContentMore showMore={this.state.showMore}>
            <span
              dangerouslySetInnerHTML={{
                __html: desc2
              }}
            />
          </ContentMore>
        </Content>
        {!this.state.showMore ? (
          <ShowMoreContainer onClick={this.handleShowMore}>
            <MoreText>{this.props.t('common:more')}</MoreText>
            <CaretDownIcon src="/icons/caret-down.svg" />
          </ShowMoreContainer>
        ) : (
          <></>
        )}
      </>
    );
  };

  render() {
    const client = this.context;

    return (
      <DesignYourBrandContainer>
        <Row type="flex" align="middle">
          <Col xs={{ span: 24, order: 1 }} sm={24} md={{ span: 12, order: 1 }}>
            <ProductImageContainer>
              <Slider {...this.state.settings}>
                {/* <ProductImage src="/images/shrink-film-01.jpg" />
                <ProductImage src="/images/shrink-film-02.jpg" /> */}
                <ProductImage src="/images/shrink-film-03.jpg" />
                <ProductImage src="/images/shrink-film-04.jpg" />
                <ProductImage src="/images/shrink-film-13.jpg" />
                <ProductImage src="/images/shrink-film-14.jpg" />
              </Slider>
            </ProductImageContainer>
          </Col>
          <Col xs={{ span: 24, order: 2 }} sm={24} md={{ span: 12, order: 2 }}>
            <ContentContainer>
              <Title>{this.props.t('index:shrinkFilm')}</Title>
              {client.mobileVersion
                ? this.renderContentMobile()
                : this.renderContentDesktop()}
            </ContentContainer>
          </Col>
        </Row>
      </DesignYourBrandContainer>
    );
  }
}

export default withTranslation(DesignYourBrand);
