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
export const articleUrl = `https://notion-api.splitbee.io/v1/table/20720198ca7a4e1b92af0a007d3b45a4`;
// export const articleUrl = `https://www.notion.so/hentaimiao/Technical-Article-012936da64b4406d987f926f2e7c1ce0`;

/**
 * get articles by axios
 */
export const fetchArticles = (url: string): Promise<ArticleType[]> => axios.get(url).then((res) => res.data);

/**
 * get articles by swr
 */
export const useAllArticle = (initialData?: ArticleType[]): { data?: ArticleType[]; error: Error } => {
  const { data, error } = useSWR(articleUrl, fetchArticles, { initialData });
  console.log(data, 333333333);
  return { data, error };
};
