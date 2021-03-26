import React from 'react';
import tw, { css } from 'twin.macro';
import Link from 'next/link';
import { useHeaderService } from './useHeaderService';
import { Music } from './Music/Music';

// * --------------------------------------------------------------------------- style

const header = css`
  color: #0088f5;
  // TODO: 抽离成变量 module-bg
  background-color: rgba(255, 255, 255, 0.8);
  ${tw`h-16 fixed w-full mx-auto text-sm z-50`}
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

const logo = css`
  ${tw`w-40 text-3xl font-bold font-mono mr-6`}
`;

// const img = css`
//   ${tw`w-44 pr-16`}
// `;

// * --------------------------------------------------------------------------- component

export const Header: React.FC = () => {
  const { text } = useHeaderService();

  return (
    <header css={header}>
      <div css={pcContainer}>
        {/* logo 和 标语 区域 */}
        <Link href={'/'}>
          <a css={logoWrapper}>
            {/*<img css={img} src={imgUrl} draggable="false" alt="LOGO" />*/}
            <span css={logo}>{'<Meow />'}</span>
            <span>{text}</span>
          </a>
        </Link>
        {/* TODO：音乐组件 */}
        <Music />
      </div>
    </header>
  );
};
