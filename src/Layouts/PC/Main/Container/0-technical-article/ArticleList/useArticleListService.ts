import { getServiceToken } from '@/utils/getServiceToken';

export const useArticleListService = () => {
  return {
    articleList: [
      { key: '1', name: '1231231' },
      { key: '2', name: '1231231' },
      { key: '3', name: '1231231' },
      { key: '4', name: '1231231' },
      { key: '5', name: '1231231' },
      { key: '6', name: '1231231' },
      { key: '7', name: '1231231' },
      { key: '8', name: '1231231' },
      { key: '9', name: '1231231' },
      { key: '10', name: '1231231' },
    ],
  };
};

export const ArticleListService = getServiceToken(useArticleListService);
