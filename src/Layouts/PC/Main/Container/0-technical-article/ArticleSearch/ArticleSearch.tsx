import React from 'react';
import tw, { css } from 'twin.macro';
// import { useArticleSearchService } from './useArticleSearchService';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchTags } from './SearchTags/SearchTags';

// * --------------------------------------------------------------------------- style

const search = css`
  background-color: rgba(255, 255, 255, 0.6);
  color: rgba(0, 0, 0, 0.54);
  ${tw`w-full text-sm font-light mb-3 rounded`}
`;

// * --------------------------------------------------------------------------- component

export const ArticleSearch: React.FC = () => {
  // const { info } = useArticleSearchService();
  return (
    <div css={search}>
      <SearchInput />
      <SearchTags />
    </div>
  );
};
