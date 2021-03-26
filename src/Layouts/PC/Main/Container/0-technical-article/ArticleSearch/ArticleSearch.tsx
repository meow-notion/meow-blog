import React from 'react';
import tw, { css } from 'twin.macro';
// import { useArticleSearchService } from './useArticleSearchService';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchTags } from './SearchTags/SearchTags';

// * --------------------------------------------------------------------------- style

const search = css`
  color: rgba(0, 0, 0, 0.54);
  ${tw`w-full mb-3`}
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
