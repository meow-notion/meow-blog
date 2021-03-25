import React from 'react';
import tw, { css } from 'twin.macro';
import { useFooterService } from './useFooterService';

// * --------------------------------------------------------------------------- style

const footer = css`
  // TODO: 抽离成公共样式 默认文字颜色 text-secondary
  color: rgba(0, 0, 0, 0.54);
  // TODO: 抽离成变量 module-bg
  background-color: rgba(255, 255, 255, 0.6);
  ${tw`w-full flex justify-center items-center h-18 mt-4 text-xs`}
`;

// * --------------------------------------------------------------------------- component

export const Footer: React.FC = () => {
  const { info } = useFooterService();
  return (
    <footer css={footer}>
      {info.map((item) => (
        <span>{item.text}</span>
      ))}
    </footer>
  );
};
