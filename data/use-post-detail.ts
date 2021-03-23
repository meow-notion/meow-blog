import useSWR from 'swr';
import axios from 'axios';
import { NOTION_BLOG_ID } from '../constant';

// * --------------------------------------------------------------------------- interface

// * --------------------------------------------------------------------------- function

const url = `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`;

export const usePostDetail = () => {
  const today = new Date();
  const aYearBefore = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

  const fetcher = (url: string) =>
    axios
      .post(
        url,
        {
          query: `query getTopPages($range: TimeRangeInput!, $filter: StatsFilter) {
            topPages(range: $range, filter: $filter) {
              key
              value
              __typename
            }
          }`,
          operationName: 'getTopPages',
          variables: {
            range: {
              from: aYearBefore.toISOString(),
              to: today.toISOString(),
            },
            filter: {},
          },
        },
        {
          headers: {
            projectId: 'blog.spencerwoo.com',
            'content-type': 'application/json',
          },
        },
      )
      .then((res) => res.data.data.topPages);

  return useSWR(url, fetcher);
};
