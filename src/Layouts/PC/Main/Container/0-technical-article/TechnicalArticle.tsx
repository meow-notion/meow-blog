import React from 'react';
import tw, { css } from 'twin.macro';
import { useTechnicalArticleService, TechnicalArticleService } from './useTechnicalArticleService';
import { pxToRem } from '@/utils/pxToRem';

import { ArticleSwiper } from './ArticleSwiper/ArticleSwiper';
import { IdeaBar } from './IdeaBar/IdeaBar';
import { ArticleList } from './ArticleList/ArticleList';
import { ArticleSearch } from './ArticleSearch/ArticleSearch';
import { ArticleRanking } from './ArticleRanking/ArticleRanking';

// * --------------------------------------------------------------------------- style

const article = css`
  ${tw`flex flex-row justify-between`}
`;

const main = css`
  ${tw`flex flex-col justify-start items-center mr-4`}
  width: ${pxToRem(600)};
`;

const aside = css`
  ${tw`flex flex-col justify-start items-center flex-1`}
`;

// * --------------------------------------------------------------------------- component

export const TechnicalArticle: React.FC = () => {
  const technicalArticleService = useTechnicalArticleService();
  return (
    <TechnicalArticleService.Provider value={technicalArticleService}>
      <div css={article}>
        <div css={main}>
          <ArticleSwiper />
          <IdeaBar />
          <ArticleList />
        </div>
        <div css={aside}>
          <ArticleSearch />
          <ArticleRanking />
        </div>
      </div>
    </TechnicalArticleService.Provider>
  );
};
