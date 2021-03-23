import React from 'react';
import Head from 'next/head';
import { Post } from '../types';
import { fetchAllPosts, allPostsUrl, useAllPosts } from '../data/use-posts';
// @ts-ignore
import { css, jsx } from '@emotion/react';

// * --------------------------------------------------------------------------- style

const style = css`
  color: red;
`;

// * --------------------------------------------------------------------------- component

export const getStaticProps = async () => {
  const posts = await fetchAllPosts(allPostsUrl);
  return { props: { posts }, revalidate: 1 };
};

const HomePage: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const { data, error } = useAllPosts(posts);

  if (error) return <div>error: {error}</div>;
  if (!data) return <div>loading...</div>;
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
