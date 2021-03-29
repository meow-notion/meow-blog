import { getServiceToken } from '@/utils/getServiceToken';

export const usePCLayoutService = (pageData: any) => {
  return {
    pageData,
  };
};

export const PCLayoutService = getServiceToken(usePCLayoutService);
