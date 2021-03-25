import useSWR from 'swr';
import axios from 'axios';
import { UserType } from './use-user';

// * --------------------------------------------------------------------------- types

export type ArticleType = {
  id: string;
  name: string;
  tag: string;
  published: boolean;
  date: string;
  slug: string;
  author: UserType[];
  preview: string;
  views: number;
};

// * --------------------------------------------------------------------------- component

export const NOTION_BLOG_ID = process.env.NOTION_BLOG_ID || '7021cba3b8a04865850473d4037762ad';
export const url = `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`;

/**
 * get articles by axios
 */
export const fetchArticles = (url: string): Promise<ArticleType[]> => axios.get(url).then((res) => res.data);

/**
 * get articles by swr
 */
export const useAllArticle = () => {
  const { data } = useSWR(url, fetchArticles);
  return data;
};
