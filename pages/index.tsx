import React from 'react';
import Head from 'next/head';
import { Post } from '@/types';
import { fetchAllPosts, allPostsUrl, useAllPosts } from '../data/use-posts';
import { PCLayout } from '@/Layouts/PC/PCLayout';

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
      <PCLayout />
    </>
  );
};

export default HomePage;
