import React, { useMemo } from 'react';
import tw, { css } from 'twin.macro';
import Link from 'next/link';
import { useNavLinkService } from './useNavLinkService';

// * --------------------------------------------------------------------------- style

const navLink = (active: boolean) => css`
  ${tw`h-10 mb-2.5 px-3.5 last:mb-0 flex items-center hover:bg-white hover:opacity-60 cursor-pointer rounded font-bold`};
  &:hover {
    color: #0088f5;
  }
  ${active && `background-color: rgba(255, 255, 255, 0.8); color: #0088f5;`};
  ${active && tw`hover:bg-white hover:opacity-80`};
`;

const navIcon = css`
  ${tw`mr-3 text-sm font-light`}
`;

// * ---------------------------------------------------------------------------

export const NavLink: React.FC<{ key: string; uuid: string }> = ({ uuid }) => {
  const navLinkService = useNavLinkService(uuid);

  if (!navLinkService) return <></>;

  const IconComp = navLinkService.icon;

  return useMemo(() => {
    return (
      <Link href={navLinkService.link}>
        <a css={navLink(navLinkService.active)}>
          {<IconComp size={14} css={navIcon} />}
          <span>{navLinkService.text}</span>
        </a>
      </Link>
    );
  }, [navLinkService]);
};
