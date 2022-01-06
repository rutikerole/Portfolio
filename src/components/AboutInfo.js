import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const AboutInfoStyle = styled.div`
  display: flex; // title and item block in one line
  justify-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  position: relative;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex; // all items are in one line
    gap: 1.5rem;
    position: absolute;
    left: 18rem;

    .item {
      background-color: var(--deep-dark);
      padding: 0.7rem;
      border-radius: 8px;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfo({
  title = 'abcdfrg',
  items = ['hey', 'rutik', 'erole'],
}) {
  return (
    <AboutInfoStyle>
      <h1 className="title">{title}</h1>

      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <Text>{item}</Text>
          </div>
        ))}
      </div>
    </AboutInfoStyle>
  );
}
