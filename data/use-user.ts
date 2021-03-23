import useSWR, { SWRResponse } from 'swr';
import axios from 'axios';
import { NOTION_BLOG_ID } from '../constant';
import { Post } from '../types';

const url = `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`;

/**
 * get all articles
 */
export const useUser = (): SWRResponse<Post[], Error> => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  return useSWR(url, fetcher);
};
