import React from 'react';
// components
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import Text from '../components/Text';
import Buttons from '../components/Buttons';
import FooterSection from '../components/FooterSection';
import AboutInfo from '../components/AboutInfo';
// img
import rutik from '../assets/images/rutik-ab.jpg';

const AboutStyle = styled.div`
  padding: 20rem 0 10rem 0;

  // top section
  .top_section {
    display: flex; // text and img are arrange side by side
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left_part {
    flex: 3; // both left and right part are equally distributed because of this
  }
  .right_part {
    flex: 2;
  }
  .subHeading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 1rem;
      border-radius: 8px;
      margin-left: 10px;
    }
  }
  .heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .info {
    margin-bottom: 5rem;

    .para {
      max-width: 100%; // we use this instead of (//margin-right: 20rem;)
    }
  }
  .right_part {
    img {
      border: 3px solid var(--gray-1);
      border-radius: 8px;
      margin-left: 30px;
    }
  }

  // bottom part
  .bottom_section {
    margin-top: 15rem;
  }
  .item {
    margin-bottom: 10rem;
  }
  .bottom_headings {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top_section {
      flex-direction: column;
      gap: 5rem;
    }
    .subHeading {
      font-size: 1.8rem;
    }
    .heading {
      font-size: 2.8rem;
    }
    .bottom_headings {
      font-size: 3rem;
    }

    .right_part {
      margin-left: -5rem;
      img {
        width: 300px;
      }
    }

    // bottom part

    .item {
      margin-bottom: 2rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutStyle>
        <div className="container">
          {/* Top Section (info and photo) */}

          <div className="top_section">
            {/* left part */}
            <Fade left>
              <div className="left_part">
                <p className="subHeading">
                  Hi, I am <span>Rutik Erole</span>
                </p>
                <h2 className="heading">A freelance Web developer</h2>
                <div className="info">
                  <Text>
                    I am from Navi Mumbai, Maharashtra. A place of Million
                    dreams. Since my childhood, I love to create things that can
                    be usefull to others. and i like to learn new things.
                    <br />
                    <br />
                    I started coding since I was in junior college. I start with
                    Html, Css and JavaScript. I find it really interesting and I
                    enjoyed the process a lot. I started exploring it, and i
                    found React which is more intresting for me , i learn it
                    through online courses. now i can create small projects
                    using react.js
                    <br />
                    <br />
                    My vision is to make the world a better place. Now almost
                    everything is becoming better than ever. It is time for us
                    to create more good stuff that helps the world to become a
                    better place.
                  </Text>
                  <div>
                    <Buttons btnText="Download CV" btnLink="#" />
                  </div>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className="right_part">
                <img src={rutik} alt="rutik" />
              </div>
            </Fade>
          </div>

          {/* bottom Section (edu and skill) */}
          <Fade bottom>
            <div className="bottom_section">
              <div className="item">
                <h1 className="bottom_headings">Education</h1>
                <AboutInfo
                  title="School"
                  items={['New Bombay City School, Navi Mumbai.']}
                />
                <AboutInfo
                  title="Collage"
                  items={['Rayat Shikshan Sanstha ( Modern college )']}
                />
                <AboutInfo title="University" items={['University Of Pune']} />
              </div>

              <div className="item">
                <h1 className="bottom_headings">My Skills</h1>
                <AboutInfo
                  title="FrontEnd"
                  items={['HTML', 'CSS', 'JAVASCRIPT', 'REACT']}
                />
                <AboutInfo title="Design" items={['Figma', 'UI/UX']} />
              </div>
            </div>
          </Fade>
        </div>
      </AboutStyle>
      <FooterSection />
    </>
  );
}
