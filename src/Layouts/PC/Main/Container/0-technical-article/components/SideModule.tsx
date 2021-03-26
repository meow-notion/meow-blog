import React from 'react';
import tw, { css } from 'twin.macro';

// * --------------------------------------------------------------------------- style

const container = css`
  ${tw`w-full flex flex-col justify-start items-center rounded text-sm font-light `}
`;

const header = css`
  color: #555555;
  ${tw`w-full flex flex-row justify-start items-center bg-transparent font-bold px-2 py-2 border-b`}
`;

const iconStyle = css`
  ${tw`flex justify-center items-center font-bold mr-2`}
`;

const titleStyle = css`
  ${tw`flex justify-center items-center`}
`;

const content = css`
  ${tw`w-full p-2 bg-white bg-transparent`}
`;

// * --------------------------------------------------------------------------- style

// TODO: remove any
export const SideModule: React.FC<{ title: string; icon?: any; children?: React.ReactNode }> = (props) => {
  const IconComp = props.icon;
  return (
    <div css={container}>
      <div css={header}>
        {IconComp && (
          <div css={iconStyle}>
            <IconComp />
          </div>
        )}
        <div css={titleStyle}>{props.title}</div>
      </div>
      <div css={content}>{props.children}</div>
    </div>
  );
};
