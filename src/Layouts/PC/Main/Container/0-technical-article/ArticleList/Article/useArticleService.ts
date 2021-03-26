import { ArticleListService } from '../useArticleListService';
import { useContext } from 'react';

export const useArticleService = (key: string) => {
  const { articleList } = useContext(ArticleListService);
  const targetArticle = articleList.find((article) => article.key === key);
  return {
    article: targetArticle,
  };
};
