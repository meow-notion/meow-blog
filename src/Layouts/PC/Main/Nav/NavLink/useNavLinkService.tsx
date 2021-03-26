import { useContext } from 'react';
import { NavService } from '../useNavService';

export const useNavLinkService = (key: string) => {
  const { navList } = useContext(NavService);
  const targetNav = navList.find((nav) => nav.key === key);

  if (!targetNav) return undefined;

  const { icon, text, link, active } = targetNav;
  return {
    icon,
    text,
    link,
    active,
  };
};
