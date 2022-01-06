import React from 'react';
// component that we require
import styled from 'styled-components'; // styling
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Text from './Text';
import Buttons from './Buttons';
// images or icon etc
import HeroImg from '../assets/images/rutik.jpg';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';

const HeroStyle = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px; // height of the hero section
    width: 100%;
    text-align: center; // all content in center
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  // heading
  .hero__heading {
    font-size: 2rem;
    margin-bottom: 3rem;
    position: relative;
    display: flex;
    width: 100%;

    .normalText {
      margin-top: -2rem;
    }

    .hero__name {
      font-size: 6rem;
      letter-spacing: 3px;
      font-family: 'StickNoBills';
      font-weight: 200;
      margin-left: 2rem;
      color: var(--white);
    }
  }
  // white block and photo and text inside it
  .hero__block {
    border: 2px solid white;
    padding: 12rem 0;
    position: relative;

    .hero__info {
      margin-bottom: -60rem;
      margin-right: 500px;
    }

    .hero__img {
      max-width: 380px;
      width: 100%;
      height: 500px;
      margin: 0 780px;
      margin-top: 24rem;
      margin-bottom: -8rem;
      border: 2px solid var(--gray-1);
    }
  }

  // follow scroll arrows
  .hero__social,
  .hero__scroll {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scroll {
    right: 50px;
  }
  .hero__social__indicators,
  .hero__scroll {
    width: 50px;
    p {
      // style to the follow and scroll which inside the <p>
      font-size: 1.4rem;
      transform: translateY(-70px) rotate(90deg); // it will rotate the follow and scroll and make it vertical
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      // style the arrow
      max-height: 50px;
      width: 16px;
      margin: 0 auto; // it take it center
      object-fit: contain;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.4rem;
          transform: rotate(90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    // heading
    .hero__heading {
      font-size: 1rem;
      margin-top: -18rem;
      .normalText {
        margin-top: -2rem;
        font-size: 1.4rem;
      }
      .hero__name {
        font-size: 3rem;
      }
    }
    // white block and photo and text inside it
    .hero__block {
      padding-top: 42rem;
      .hero__img {
        max-width: 280px;
        width: 100%;
        height: 350px;
        align-items: center;
        justify-content: center;
        margin: 0 20px;
      }
      .hero__info {
        margin-top: -1rem;
        margin-right: 5px;
        .para {
        }
      }
      .button {
        margin-top: -2rem;
      }
    }

    // follow scroll arrows

    .hero__social {
      margin-bottom: -7rem;
      left: 5px;
    }
    .hero__scroll {
      right: 10px;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyle>
      <div className="hero">
        <div className="container">
          {/* Heading */}
          <Fade left>
            <h1 className="hero__heading">
              <p className="normalText">Hello this is</p>
              <h1 className="hero__name">RUTIK EROLE</h1>
            </h1>
          </Fade>

          {/* Block */}
          <Pulse>
            <div className="hero__block">
              <Fade left>
                <div className="hero__info">
                  <Text className="text_info">
                    I am a Front-end web developer and designer. I love to build
                    new website for buisness and make new web experiences for
                    the people.
                  </Text>
                  <Buttons
                    btnLink="./project"
                    btnText="See My Work"
                    outline={false}
                  />
                </div>
              </Fade>

              <Fade right>
                <div className="hero__img">
                  <img src={HeroImg} alt="heroImg" />
                </div>
              </Fade>
            </div>
          </Pulse>

          <Fade top>
            <div className="hero__social">
              <div className="hero__social__indicators">
                <p>FOLLOW</p>
                <img src={SocialMediaArrow} alt="arw" />
              </div>

              <div className="hero__social__text">
                <ul>
                  <li>
                    <a href="https://twitter.com/RutikErole">TW</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/rutik__erole/">IG</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/rutik-erole-842134205/">
                      LI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Fade>

          <Fade top>
            <div className="hero__scroll">
              <p>SCROLL</p>
              <img src={SocialMediaArrow} alt="arw" />
            </div>
          </Fade>
        </div>
      </div>
    </HeroStyle>
  );
}
