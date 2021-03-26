import React from 'react';
import tw, { css } from 'twin.macro';
import { Nav } from './Nav/Nav';
import { Container } from './Container/Container';
// * --------------------------------------------------------------------------- style

const main = css`
  // TODO: 抽离成变量 pcWidth or pcContainer
  width: 1050px;
  ${tw`pt-20 flex flex-row`}
`;

// * --------------------------------------------------------------------------- component

export const Main: React.FC = () => {
  return (
    <main css={main}>
      <Nav />
      <Container />
    </main>
  );
};
