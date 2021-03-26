import React from 'react';
import tw, { css } from 'twin.macro';

// * --------------------------------------------------------------------------- style

const container = css`
  background-color: rgba(255, 255, 255, 0.6);
  ${tw`border border-black`}
`;

// * --------------------------------------------------------------------------- component

export const SearchTags: React.FC = () => {
  return <div css={container}>search</div>;
};
