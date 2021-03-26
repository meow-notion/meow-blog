import React from 'react';
import tw, { css } from 'twin.macro';
import { ArticleListService, useArticleListService } from './useArticleListService';

import { Article } from './Article/Article';

// * --------------------------------------------------------------------------- style

const list = css`
  ${tw`w-full`}
`;

// * --------------------------------------------------------------------------- component

export const ArticleList: React.FC = () => {
  const articleListService = useArticleListService();
  return (
    <ArticleListService.Provider value={articleListService}>
      <div css={list}>
        {articleListService.articleList.map((article) => (
          <Article key={article.key} uuid={article.key} />
        ))}
      </div>
    </ArticleListService.Provider>
  );
};
