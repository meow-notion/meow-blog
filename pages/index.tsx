import React from 'react';
import Head from 'next/head';
import { ArticleType } from '@/apis/use-articles';
import { fetchArticles, useAllArticle, articleUrl } from '@/apis/use-articles';
import { PCLayout } from '@/Layouts/PC/PCLayout';

// * --------------------------------------------------------------------------- SSG

export const getStaticProps = async () => {
  const posts = await fetchArticles(articleUrl);
  return { props: { posts }, revalidate: 1 };
};

// * --------------------------------------------------------------------------- component

const HomePage: React.FC<{ posts: ArticleType[] }> = ({ posts }) => {
  const { data, error } = useAllArticle(posts);

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
