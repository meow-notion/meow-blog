import React from 'react';
import tw, { css } from 'twin.macro';
import { TiTags } from 'react-icons/ti';
import { SideModule } from '@/Layouts/PC/Main/Container/0-technical-article/components/SideModule';
import { AiOutlineSearch } from 'react-icons/ai';

// * --------------------------------------------------------------------------- style

const container = css`
  background-color: rgba(255, 255, 255, 0.6);
  ${tw`rounded`}
`;

const content = css`
  ${tw`w-full flex-1`}
`;

const inputWrapper = css`
  ${tw`flex flex-row flex-1`}
`;

const input = css`
  color: #999;
  background-color: #e8e8e8;
  &:hover {
    background-color: #dedede;
  }
  ${tw`outline-none flex-1 py-1 px-2`}
`;

const svg = css`
  background-color: #cfcfcf;
  &:hover {
    background-color: #c2c2c2;
  }
  ${tw`flex items-center px-2 flex-shrink-0 text-base leading-4`}
`;

// * --------------------------------------------------------------------------- component

export const SearchTags: React.FC = () => {
  return (
    <div css={container}>
      <SideModule icon={TiTags} title={'标签'}>
        <div css={content}>
          <div css={inputWrapper}>
            <input css={input} placeholder={'筛选'} />
            <button css={svg}>
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      </SideModule>
    </div>
  );
};
