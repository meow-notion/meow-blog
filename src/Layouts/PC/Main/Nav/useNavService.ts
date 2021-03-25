import { useEffect, useState } from 'react';
import { getServiceToken } from '@/utils/getServiceToken';

import { useRouter } from 'next/router';

// * --------------------------------------------------------------------------- icons

import { AiOutlineBulb, AiOutlineMan } from 'react-icons/ai';
import { BsBook, BsCalendar, BsCardText, BsCollection } from 'react-icons/bs';
import { GrPersonalComputer } from 'react-icons/gr';
import { RiPlantLine } from 'react-icons/ri';

// * --------------------------------------------------------------------------- hook

export const useNavService = () => {
  const router = useRouter();

  const defaultNavList = [
    { key: '1', icon: BsBook, text: '技术文章', link: '/', active: false },
    { key: '2', icon: RiPlantLine, text: '生活分享', link: '/lifeSharing', active: false },
    { key: '3', icon: GrPersonalComputer, text: '软件技巧', link: '/software', active: false },
    { key: '4', icon: AiOutlineBulb, text: '知识卡片', link: '/card', active: false },
    { key: '5', icon: BsCardText, text: '简历', link: '/resume', active: false },
    { key: '6', icon: BsCollection, text: '作品集', link: '/portfolio', active: false },
    { key: '7', icon: BsCalendar, text: '计划表', link: '/schedules', active: false },
    { key: '8', icon: AiOutlineMan, text: '关于我', link: '/aboutMe', active: false },
  ];

  const [navList, setNavList] = useState(defaultNavList);

  const activeNavByCategory = (category: string) => {
    const newList = navList.map((nav) => {
      nav.active = nav.link === category;
      return nav;
    });
    setNavList(newList);
  };

  useEffect(() => {
    activeNavByCategory(router.route);
  }, [router.route]);

  return {
    navList,
  };
};

// * --------------------------------------------------------------------------- service

// register to global service
export const NavService = getServiceToken(useNavService);
