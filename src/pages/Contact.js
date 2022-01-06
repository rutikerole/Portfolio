import React, { useState } from 'react';
// componenets
import styled from 'styled-components';
import { MdPlace, MdEmail, MdPhone } from 'react-icons/md';
import { Fade } from 'react-reveal';
import FooterSection from '../components/FooterSection';
import Text from '../components/Text';

const ContactStyle = styled.div`
  padding: 10rem 0;

  // heading and text and button
  .headings {
    text-align: center;
    margin-top: 5rem;
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

  .contactsection__wrapper {
    display: flex; // both main left and right div are side by side
    gap: 5rem;
    margin-top: 7rem;
    justify-content: center;
    position: relative;
  }

  // line
  .contactsection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .contact_left {
    width: 100%;
    max-width: 500px;
  }
  .contact_right {
    width: 100%;
    max-width: 500px;
  }

  //LEFT PART
  .blocks {
    padding: 2rem;
    background-color: var(--deep-dark);
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    .icon {
      color: var(--white);
      background-color: var(--gray-2);
      padding: 1.3rem;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    svg {
      width: 3.5rem;
    }
  }

  // RIGHT PART
  .contact_right {
    width: 100%;
    .form_group {
      width: 100%;
      margin-bottom: 2rem;
    }
    label {
      font-size: 1.8rem;
    }
    input,
    textarea {
      width: 100%;
      font-size: 2rem;
      padding: 1.2rem;
      color: var(--gray-1);
      background-color: var(--deep-dark);
      outline: none;
      border: none;
      border-radius: 8px;
      margin-top: 1rem;
    }
    textarea {
      min-height: 250px;
      resize: vertical;
    }
    button[type='submit'] {
      background-color: var(--gray-1);
      color: var(--black);
      font-size: 2rem;
      display: inline-block;
      outline: none;
      border: none;
      padding: 1rem 4rem;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 1rem;
    }
  }

  // for mobiles
  @media only screen and (max-width: 768px) {
    .headings {
      p {
        font-size: 1.2rem;
      }
      h2 {
        font-size: 3.6rem;
      }
    }
    .contactsection__wrapper {
      flex-direction: column;
    }
    .contactsection__wrapper::after {
      display: none;
    }
    .contact_left,
    .contact_right {
      max-width: 100%;
    }
    .contact_right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <ContactStyle>
        <div className="container">
          {/* Heading */}
          <div className="headings">
            <p>get in touch</p>
            <h2>contact</h2>
          </div>

          {/* contact form (left - right) */}
          <div className="contactsection__wrapper">
            {/* left */}
            <Fade left>
              <div className="contact_left">
                <div className="blocks">
                  <div className="icon">
                    <MdPhone />
                  </div>
                  <div className="info">
                    <Text>+91 8652677526</Text>
                  </div>
                </div>

                <div className="blocks">
                  <div className="icon">
                    <MdEmail />
                  </div>
                  <div className="info">
                    <Text>erolerutik9@gmail.com</Text>
                  </div>
                </div>

                <div className="blocks">
                  <div className="icon">
                    <MdPlace />
                  </div>
                  <div className="info">
                    <Text>Navi Mumbai, Maharashtra</Text>
                  </div>
                </div>
              </div>
            </Fade>

            {/* right */}
            <Fade right>
              <div className="contact_right">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">
                      Your Name
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Your Email
                      <input
                        type="text"
                        id="email"
                        email="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Your Message
                      <textarea
                        type="text"
                        id="message"
                        message="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </label>
                  </div>
                  <button type="submit">Send</button>
                </form>
              </div>
            </Fade>
          </div>
        </div>
      </ContactStyle>
      <FooterSection />
    </>
  );
}
