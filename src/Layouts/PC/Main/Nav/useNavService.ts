import { useEffect, useState } from 'react';
import { getServiceToken } from '@/utils/getServiceToken';

import { useRouter } from 'next/router';

// * --------------------------------------------------------------------------- type

export type NavType = 'article' | 'lifeSharing' | 'software' | 'card' | 'resume' | 'portfolio' | 'schedule' | 'aboutMe';
export const defaultNav = 'article';

// * --------------------------------------------------------------------------- icons

import { AiOutlineBulb, AiOutlineMan } from 'react-icons/ai';
import { BsBook, BsCalendar, BsCardText, BsCollection } from 'react-icons/bs';
import { GrPersonalComputer } from 'react-icons/gr';
import { RiPlantLine } from 'react-icons/ri';

// * --------------------------------------------------------------------------- hook

/**
 * active target nav link by url router
 */
export const useNavService = () => {
  const defaultNavList: { key: string; icon: any; text: string; link: string; active: boolean }[] = [
    { key: '1', icon: BsBook, text: '技术文章', link: getLink('article'), active: false },
    { key: '2', icon: RiPlantLine, text: '生活分享', link: getLink('lifeSharing'), active: false },
    { key: '3', icon: GrPersonalComputer, text: '软件技巧', link: getLink('software'), active: false },
    { key: '4', icon: AiOutlineBulb, text: '知识卡片', link: getLink('card'), active: false },
    { key: '5', icon: BsCardText, text: '简历', link: getLink('resume'), active: false },
    { key: '6', icon: BsCollection, text: '作品集', link: getLink('portfolio'), active: false },
    { key: '7', icon: BsCalendar, text: '计划表', link: getLink('schedule'), active: false },
    { key: '8', icon: AiOutlineMan, text: '关于我', link: getLink('aboutMe'), active: false },
  ];
  const [navList, setNavList] = useState(defaultNavList);
  const { route } = useRouter();

  const activeNavByCategory = (category: string) => {
    const newList = navList.map((nav) => {
      nav.active = nav.link === category;
      return nav;
    });
    setNavList(newList);
  };

  useEffect(() => {
    activeNavByCategory(route);
  }, [route]);

  return {
    navList,
  };
};

const getLink = (link: NavType) => {
  return link === defaultNav ? '/' : `/${link}`;
};

// * --------------------------------------------------------------------------- service

// register to global service
export const NavService = getServiceToken(useNavService);
