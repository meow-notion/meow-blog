import React from 'react';
import tw, { css } from 'twin.macro';
import { useSearchInputService } from './useSearchInputService';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiClockwork } from 'react-icons/gi';

// * --------------------------------------------------------------------------- style

const group = css`
  background-color: rgba(255, 255, 255, 0.6);
  ${tw`flex flex-row justify-between p-2 mb-4 rounded`}
`;

const inputWrapper = css`
  ${tw`flex flex-row flex-1 mr-2`}
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

const button = css`
  ${tw`flex items-center m-0 p-0 outline-none px-2`}
  background-color: #e8e8e8;
  &:hover {
    background-color: #dedede;
  }
`;

// * --------------------------------------------------------------------------- component

export const SearchInput: React.FC = () => {
  const { placeholder } = useSearchInputService();
  return (
    <div css={group}>
      <div css={inputWrapper}>
        <input css={input} placeholder={placeholder} />
        <button css={svg}>
          <AiOutlineSearch />
        </button>
      </div>
      <button css={button}>
        <GiClockwork />
      </button>
    </div>
  );
};
