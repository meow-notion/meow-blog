import React from 'react';
import tw, { css } from 'twin.macro';

// * --------------------------------------------------------------------------- style

const music = css`
  ${tw`text-blue-200`};
`

// * --------------------------------------------------------------------------- component

export const Music: React.FC = () => {
  return <div css={music}>呜呜呜，Music 组件怎么做呀</div>;
};
