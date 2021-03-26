import { getServiceToken } from '@/utils/getServiceToken';
import React from 'react';

// * --------------------------------------------------------------------------- hook

export const useTechnicalArticleService = () => {
  return {
    articleList: [{ key: '132123123', name: '23123132' }],
  };
};

// * --------------------------------------------------------------------------- service

export const TechnicalArticleService = getServiceToken(useTechnicalArticleService);

// * --------------------------------------------------------------------------- provider

/**
 * TODO: 在这里封装还是手动声明比较好呢？
 */

export const TechnicalArticleServiceProvider: React.FC = (props) => {
  const technicalArticleService = useTechnicalArticleService();
  return (
    <TechnicalArticleService.Provider value={technicalArticleService}>
      {props.children}
    </TechnicalArticleService.Provider>
  );
};
