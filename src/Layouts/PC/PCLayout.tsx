import React from 'react';
import tw, { css } from 'twin.macro';
import { usePCLayoutService, PCLayoutService } from './usePCLayoutService';

import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

// * --------------------------------------------------------------------------- style

const pcLayout = css`
  // TODO: 抽离成变量 pcWidth or pcContainer
  width: 1050px;
  ${tw`min-h-screen w-full flex flex-col justify-between items-center`}
`;

const background = css`
  background-color: #eee;
  ${tw`fixed w-full h-full top-0 left-0`}
`;

const image = css`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: url(${require('@/assets/background.png')});
`;

// * --------------------------------------------------------------------------- component

export const PCLayout: React.FC<{ data: any }> = ({ data }) => {
  const layoutService = usePCLayoutService(data);
  return (
    <PCLayoutService.Provider value={layoutService}>
      <div css={pcLayout}>
        <div css={background}>
          <div css={image} />
        </div>
        <Header />
        <Main />
        <Footer />
      </div>
    </PCLayoutService.Provider>
  );
};
