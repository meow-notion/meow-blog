import React from 'react';
import Head from 'next/head';
import { getPostList } from '@/apis/get-post-list';
import { PCLayout } from '@/Layouts/PC/PCLayout';

// * --------------------------------------------------------------------------- SSG

export const getStaticProps = async () => {
  const posts = await getPostList();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

// * --------------------------------------------------------------------------- component

const HomePage: React.FC<{ posts: any }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>绅士喵呜の博客</title>
      </Head>
      <PCLayout data={posts} />
    </>
  );
};

export default HomePage;
