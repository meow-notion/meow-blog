import Head from 'next/head';
import React from 'react';
// @ts-ignore
import { jsx, css } from '@emotion/react';

// * --------------------------------------------------------------------------- style

const style = css`
  color: red;
`;

// * --------------------------------------------------------------------------- component

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>绅士喵呜の博客</title>
      </Head>
      <div css={style}>hello word</div>
    </>
  );
};

export default HomePage;
