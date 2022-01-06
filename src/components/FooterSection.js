import React from 'react';
// components
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import Text from './Text';
import Buttons from './Buttons';
// img
import Linkedin from '../assets/images/linkedin.png';
import Instagram from '../assets/images/insta.png';
import Twitter from '../assets/images/twitter.png';

const FooterStyle = styled.div`
  padding: 10rem 0;

  //BANNER
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0;
    text-align: center;
    .banner-heading {
      font-size: 4rem;
      margin-top: 1rem;
      margin-bottom: -3rem;
    }
  }

  // footer

  .footer {
    margin-top: 12rem;
    margin-bottom: -10rem;
    background-color: var(--deep-dark);
    padding: 8rem 0;
    .container {
      display: flex; // all are in one block line
      gap: 2rem;
    }
    .footer__col1 {
      flex: 2;
      .col1__title {
        font-family: 'Martel Light';
        font-weight: 300;
        font-size: 4rem;
        margin-bottom: 2rem;
      }
      .para {
        margin-left: 10px;
      }
    }
  }

  .title {
    font-size: 3rem;
    margin-left: 98.5rem;
  }

  .footer__col2 {
    flex: 1;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    margin-top: 3rem;
  }
  .socialIcon {
    text-align: center; // title and logo are center
    margin-top: 3rem;
    img {
      width: 40px;
      margin-top: 3.5rem;
      margin-left: 80px;
    }
    .para {
      font-size: 2.4rem;
      margin-left: 80px;
    }
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 10rem;
    margin-bottom: -10rem;
    .para {
      max-width: 700px;
      margin-right: -150px;
    }
  }

  @media only screen and (max-width: 768px) {
    // banner
    .banner-heading {
      font-size: 2.8rem;
    }
    .container {
      flex-direction: column;
      gap: 0rem;
    }

    //footer

    .title {
      position: absolute;
      margin-left: 2rem;
      margin-top: 14rem;
    }
    .footer__col1 {
      margin-top: -5rem;

      .para {
        margin-top: -2rem;
      }
    }

    .footer__col2,
    .footer__col3,
    .footer__col4 {
      margin-top: 2 rem;
      margin-left: -26rem;
    }

    .socialIcon {
      margin-top: 4rem;
      .para {
        font-size: 2rem;
      }
      img {
        margin-top: 2rem;
        width: 30px;
      }
    }

    .copyright {
      .para {
        max-width: 300px;
        margin-left: -8px;
        margin-top: -0.5rem;
        font-size: 1rem;
      }
    }
  }
`;

export default function FooterSection() {
  return (
    <FooterStyle>
      {/* contact banner */}
      <Fade bottom>
        <div className="container">
          <div className="contactBanner__wrapper">
            <Text>Have a project in mind</Text>
            <h3 className="banner-heading">Let me help you</h3>
            <Buttons
              btnLink="./contact"
              btnText="Contact Now"
              outline={false}
            />
          </div>
        </div>
      </Fade>

      {/* footer */}
      <Fade bottom>
        <div className="footer">
          <h1 className="title">Social Links</h1>
          <div className="container">
            <div className="footer__col1">
              <h1 className="col1__title">ऋतिक ईरोळे...</h1>
              <Text>
                A freelance web developer and website designer from Mumbai. I
                always make websites with unique ideas and designs, and also has
                a good performance rate.
              </Text>
            </div>

            <div className="footer__col2">
              <div className="socialIcon">
                <div className="linkedin">
                  <Text>Linkedin</Text>
                  <a href="https://www.linkedin.com/in/rutik-erole-842134205/">
                    <img src={Linkedin} alt="ld" />
                  </a>
                </div>
              </div>
            </div>

            <div className="footer__col3">
              <div className="socialIcon">
                <div className="twitter">
                  <Text>Twitter</Text>
                  <a href="https://twitter.com/RutikErole">
                    <img src={Twitter} alt="twitter" />{' '}
                  </a>
                </div>
              </div>
            </div>

            <div className="footer__col4">
              <div className="socialIcon">
                <div className="insta">
                  <Text>Instagram</Text>
                  <a href="https://www.instagram.com/rutik__erole/">
                    <img src={Instagram} alt="insta" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className="copyright">
        <div className="container">
          <Text>Rutik Erole © Copyright 2021. All Right Reserved.</Text>
        </div>
      </div>
    </FooterStyle>
  );
}
