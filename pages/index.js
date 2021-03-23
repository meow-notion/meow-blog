import Head from 'next/head';
import { jsx, css } from '@emotion/react';

// * --------------------------------------------------------------------------- style

/* @jsxRuntime classic */
/** @jsx jsx **/
const style = css`
  color: red;
`;

// * --------------------------------------------------------------------------- component

const Home = () => {
  return <div css={style}>hello word</div>;
};

export default Home;
