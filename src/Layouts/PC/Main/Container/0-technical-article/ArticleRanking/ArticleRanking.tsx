import React from 'react';
import tw, { css } from 'twin.macro';
import { ImFire } from 'react-icons/im';
import { SideModule } from '@/Layouts/PC/Main/Container/0-technical-article/components/SideModule';

// * --------------------------------------------------------------------------- style

const container = css`
  color: rgba(0, 0, 0, 0.54);
  background-color: rgba(255, 255, 255, 0.6);
  ${tw`rounded`}
`;

const content = css`
  ${tw`w-full flex-1`}
`;

// * --------------------------------------------------------------------------- component

export const ArticleRanking: React.FC = () => {
  return (
    <div css={container}>
      <SideModule icon={ImFire} title={'热门'}>
        <div css={content}>挠挠头，还没来得及开发阅读量/点击量分析。</div>
      </SideModule>
    </div>
  );
};
