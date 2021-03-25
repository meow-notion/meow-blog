import { useRouter } from 'next/router';
import { defaultNav, NavType } from '../Nav/useNavService';

export const useContainerService = () => {
  const { route } = useRouter();
  const category = route.replace('/', '') as NavType;
  return {
    activeCategory: route === '/' ? defaultNav : category,
  };
};
