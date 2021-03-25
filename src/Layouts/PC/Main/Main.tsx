import React from 'react';
import tw, { css } from 'twin.macro';
import { Nav } from './Nav/Nav';

// * --------------------------------------------------------------------------- style

const main = css`
  // TODO: 抽离成变量 pcWidth or pcContainer
  width: 1050px;
  ${tw`mt-4 border border-black border-dashed box-border`}
`;

// * --------------------------------------------------------------------------- component

export const Main: React.FC = () => {
  return (
    <main css={main}>
      <Nav />
    </main>
  );
};
