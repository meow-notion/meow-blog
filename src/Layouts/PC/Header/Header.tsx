import React from 'react';
import tw, { css } from 'twin.macro';
import Link from 'next/link';
import { useHeaderService } from './useHeaderService';
import { pxToRem } from '@/utils/pxToRem';

// * --------------------------------------------------------------------------- style

const header = css`
  color: #0088f5;
  // TODO: 抽离成变量 module-bg
  height: ${pxToRem(60)};
  background-color: rgba(255, 255, 255, 0.6);
  ${tw`w-full mx-auto text-sm`}
`;

const pcContainer = css`
  // TODO: 抽离成变量 pcWidth or pcContainer
  width: 1050px;
  ${tw`h-full mx-auto flex justify-between items-center`}
`;

const logoWrapper = css`
  width: 30rem;
  ${tw`h-full flex flex-row justify-start items-center cursor-pointer`}
`;

const img = css`
  width: 11rem;
  ${tw`pr-16`}
`;

// * --------------------------------------------------------------------------- component

export const Header: React.FC = () => {
  const { text, imgUrl } = useHeaderService();

  return (
    <header css={header}>
      <div css={pcContainer}>
        {/* logo 和 标语 区域 */}
        <Link href={'/'}>
          <a css={logoWrapper}>
            <img css={img} src={imgUrl} draggable="false" alt="LOGO" />
            <span>{text}</span>
          </a>
        </Link>
        {/* TODO：音乐组件 */}
        <div>music</div>
      </div>
    </header>
  );
};
