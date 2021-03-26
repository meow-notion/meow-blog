import useSWR from 'swr';
import axios from 'axios';
import { ArticleType } from '@/apis/use-articles';

// export const allPostsUrl = `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`;
export const allPostsUrl = `https://www.notion.so/hentaimiao/Technical-Article-012936da64b4406d987f926f2e7c1ce0`;

/**
 * get all articles by axios
 */
export const fetchAllPosts = (url: string): Promise<ArticleType[]> => axios.get(url).then((res) => res.data);

/**
 * get all articles
 */
export const useAllPosts = (initialData?: ArticleType[]): { data: ArticleType[] | undefined; error: Error } => {
  const { data, error } = useSWR(allPostsUrl, fetchAllPosts, { initialData });
  return { data, error };
};
