import React from 'react';
// components
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Text from './Text';
import Buttons from './Buttons';
// img
import AnimeImg from '../assets/images/rutik-anime.png';

const AboutStyle = styled.div`
  padding: 10rem 0; // 10 rem below from herosection
  // heading and text and button
  .headings {
    text-align: center; // default
    text-align: left;
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
  .container {
    display: flex; // all are in same block range (i.e left photo and right text)
    align-items: center;
    justify-content: flex-start;
    text-align: left; // all lines start from left side
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1; // two section are divides into 50 50 section
  }
  .aboutSection__left {
    img {
      margin-left: -4rem;
    }
  }

  .para {
    // we  create this class in our <Text /> component
    margin-top: 2rem;
    margin-left: 0rem;
  }
  .aboutSection__buttons {
    display: flex; // both buttons are in a line
    align-items: center;
    justify-content: flex-start; // first button are start from flex start
    gap: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .headings {
      //margin-left: 7rem;
      text-align: center;
      margin-top: -38rem;
      p {
        font-size: 1.2rem;
      }
      h2 {
        font-size: 3.6rem;
      }
    }
    .container {
      flex-direction: column; // block r below each other
      text-align: center; // all lines start from left side
    }

    .aboutSection__left {
      img {
        margin-left: -1rem;
      }
    }
    .para {
      text-align: center;
      margin-top: 32rem;
    }
    .aboutSection__buttons {
      margin-top: -4rem;
      justify-content: center; // first button are start from flex start
      gap: 2rem;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutStyle>
      <div className="container">
        {/* // left section */}
        <Fade left>
          <div className="aboutSection__left">
            <img src={AnimeImg} alt="animated" />
          </div>
        </Fade>

        {/* // right section */}
        <Fade bottom>
          <div className="aboutSection__right">
            <div className="headings">
              <p>Let me introduce myself</p>
              <h2>About Me</h2>
            </div>

            <div>
              <Text>
                I am a front-end web developer and website designer. I like to
                develope websites, I love to do creative project and show unique
                views to the audience through my work.
              </Text>
            </div>

            <div className="aboutSection__buttons">
              <Buttons btnLink="./project" btnText="Work" outline={false} />
              <Buttons btnLink="./about" btnText="Read More" outline />
            </div>
          </div>
        </Fade>
      </div>
    </AboutStyle>
  );
}
