import React from 'react';
import tw, { css } from 'twin.macro';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

// * --------------------------------------------------------------------------- style

const pcLayout = css`
  // TODO: 抽离成变量 pcWidth or pcContainer
  width: 1050px;
  ${tw`w-full h-full flex flex-col justify-between items-center`}
`;

// * --------------------------------------------------------------------------- component

export const PCLayout: React.FC = () => {
  return (
    <div css={pcLayout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
