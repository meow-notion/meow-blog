import useSWR from 'swr';
import axios from 'axios';
import { Post } from '../src/types';
import { NOTION_BLOG_ID } from '../src/assets/constant';

export const allPostsUrl = `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`;

/**
 * get all articles by axios
 */
export const fetchAllPosts = (url: string): Promise<Post[]> => axios.get(url).then((res) => res.data);

/**
 * get all articles
 */
export const useAllPosts = (initialData?: Post[]): { data: Post[] | undefined; error: Error } => {
  const { data, error } = useSWR(allPostsUrl, fetchAllPosts, { initialData });
  return { data, error };
};
