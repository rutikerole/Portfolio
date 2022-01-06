import React from 'react';
// component that we require
import styled from 'styled-components'; // styling
import { Fade } from 'react-reveal';
import Text from './Text';
// images or icon etc
import WebDesign from '../assets/images/web-design.png';
import WebDev from '../assets/images/web-dev.png';
import Logo from '../assets/images/logo.png';

const ServiceStyle = styled.div`
  padding: 10rem 0;
  // heading and text and button
  .headings {
    text-align: center;

    p {
      font-family: 'RobotoMono Regular';
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    h2 {
      font-family: 'Montserrat Bold';
      font-size: 6rem;
      margin-top: 0.5rem;
      text-transform: uppercase;
    }
  }

  .services__allItems {
    text-align: center;
    display: flex; // all three block are in side by side
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
    .servicesItemIcon {
      img {
        height: 3rem;
        width: 3rem;
      }
    }
    .title {
      margin-top: 1rem;
      font-size: 2.5rem;
      font-family: 'Montserrat SemiBold';
    }
    .para {
      margin-top: 2rem;
      font-size: 1.7rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .headings {
      p {
        font-size: 1.2rem;
      }
      h2 {
        font-size: 3.6rem;
      }
    }
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServiceStyle>
      <Fade bottom>
        <div className="container">
          <div className="headings">
            <p>What i will do for you</p>
            <h2>Services</h2>
          </div>

          <div className="services__allItems">
            <div className="servicesItemIcon">
              <img src={WebDesign} alt="web-design" />
              <div className="title">Web Design</div>
              <Text>
                I do ui/ux design for the website that helps website to get a
                unique look.
              </Text>
            </div>
            <div className="servicesItemIcon">
              <img src={WebDev} alt="web-dev" />
              <div className="title">Web Dev</div>
              <Text>
                I build website with the latest technology and with best
                programing language.
              </Text>
            </div>
            <div className="servicesItemIcon">
              <img src={Logo} alt="logo-design" />
              <div className="title">Logo Design</div>
              <Text>
                I can build logos which help to define your brand and your
                product.
              </Text>
            </div>
          </div>
        </div>
      </Fade>
    </ServiceStyle>
  );
}
