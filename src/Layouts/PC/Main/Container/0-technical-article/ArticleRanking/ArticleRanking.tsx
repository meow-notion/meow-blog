import React from 'react';
import tw, { css } from 'twin.macro';

// * --------------------------------------------------------------------------- style

const rank = css`
  ${tw`w-full`}
`;

// * --------------------------------------------------------------------------- component
export const ArticleRanking: React.FC = () => {
  return <div css={rank}>ranking</div>;
};
