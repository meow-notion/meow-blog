import React from 'react';
import tw, { css } from 'twin.macro';
import { useNavService, NavService } from './useNavService';
import { NavLink } from './NavLink/NavLink';

// * --------------------------------------------------------------------------- style

const nav = css`
  // TODO: 抽离成公共样式 默认文字颜色 text-secondary
  color: rgba(0, 0, 0, 0.54);
  ${tw`text-sm w-40 mr-4`}
`;

// * -------------w-------------------------------------------------------------- component

export const Nav: React.FC = () => {
  const navService = useNavService();
  return (
    <NavService.Provider value={navService}>
      <div css={nav}>
        {navService.navList.map((nav) => (
          <NavLink key={nav.key} uuid={nav.key} />
        ))}
      </div>
    </NavService.Provider>
  );
};
