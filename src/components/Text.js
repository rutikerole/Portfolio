/* in our portfolio project we add many text in it, therefore better experince we create another
component for text */
// now we only import our text.js where it needed

import React from 'react';
import styled from 'styled-components';

// for text inside the block
const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 2rem;
  line-height: 1.4em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function text({ children }) {
  // children is text inside the  <Text></Text> bracket which we call in hero section
  // console.log(children); // our text is shown which is inside the <Text></Text> bracket
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
