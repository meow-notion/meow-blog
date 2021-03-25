import React from 'react';
import tw, { css } from 'twin.macro';
import { useNavService } from './useNavService';

// * --------------------------------------------------------------------------- style

const nav = css`
  // TODO: 抽离成公共样式 默认文字颜色 text-secondary
  color: rgba(0, 0, 0, 0.54);
  ${tw`text-xs w-40 px-2`}
`;

// * --------------------------------------------------------------------------- component

export const Nav: React.FC = () => {
  const { navList } = useNavService();
  return (
    <div css={nav}>
      {navList.map((nav) => (
        <div key={nav.key}>{nav.text}</div>
      ))}
    </div>
  );
};
