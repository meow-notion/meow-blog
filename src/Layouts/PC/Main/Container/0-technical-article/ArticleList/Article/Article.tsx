import React from 'react';
import tw, { css } from 'twin.macro';
import { useArticleService } from './useArticleService';

// * --------------------------------------------------------------------------- style

const item = css`
  background-color: rgba(255, 255, 255, 0.6);
  ${tw`h-32 mb-4 rounded last:mb-0 p-2 hover:bg-white hover:cursor-pointer`}
`;

const content = css`
  ${tw`w-full h-full flex flex-row`}
`;

const image = css`
  ${tw`h-full w-44 mr-3 bg-blue-300`}
`;

const info = css`
  ${tw`flex-1`}
`;


// * --------------------------------------------------------------------------- style

export const Article: React.FC<{ key: string; uuid: string }> = ({ uuid }) => {
  const { article } = useArticleService(uuid);
  return article ? (
    <div css={item}>
      <div css={content}>
        <div css={image} />
        <div css={info}>{article.name}</div>
      </div>
    </div>
  ) : (
    <></>
  );
};
``;
