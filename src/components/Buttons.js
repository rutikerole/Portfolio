/* in our portfolio project we add diffrent BUTTONs, therefore better experince we create another
component for BUTTON */
// now we only import our Buttons.js where it needed
// we create dynamic buttons

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// style for the button

const ButtonStyle = styled.div`
  margin-top: 10rem; //it is whole button block
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Buttons({ btnLink, btnText, outline }) {
  // we set value of  "btnLink, btnText"  inside the  <Buttons></Buttons> bracket which we call in hero section
  // console.log(btnLink, btnText); // our text is shown which is inside the <Buttons></Buttons> bracket
  return (
    <ButtonStyle outline={outline}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
