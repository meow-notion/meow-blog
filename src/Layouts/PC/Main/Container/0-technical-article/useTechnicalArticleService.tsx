import { useContext } from 'react';
import { PCLayoutService } from '@/Layouts/PC/usePCLayoutService';
import { getServiceToken } from '@/utils/getServiceToken';

// * --------------------------------------------------------------------------- hook

export const useTechnicalArticleService = () => {
  const { pageData } = useContext(PCLayoutService);

  console.log(pageData, 121212);
  return {
    articleList: [{ key: '132123123', name: '23123132' }],
  };
};

// * --------------------------------------------------------------------------- service

export const TechnicalArticleService = getServiceToken(useTechnicalArticleService);
