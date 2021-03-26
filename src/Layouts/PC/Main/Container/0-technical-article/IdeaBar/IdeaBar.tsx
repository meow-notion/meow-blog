import React from 'react';
import tw, { css } from 'twin.macro';
import { useIdeaBarService } from './useIdeaBarService';

// * --------------------------------------------------------------------------- style

const idea = css`
  background-color: rgba(255, 255, 255, 0.6);
  color: rgba(0, 0, 0, 0.54);
  ${tw`h-10 w-full px-8 flex justify-start items-center mb-4 text-sm font-medium rounded`}
`;

export const IdeaBar: React.FC = () => {
  const { info } = useIdeaBarService();
  return <div css={idea}>{info}</div>;
};
