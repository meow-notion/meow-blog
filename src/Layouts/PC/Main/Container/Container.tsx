import React from 'react';
import { useContainerService } from './useContainerService';
import tw, { css } from 'twin.macro';

import { TechnicalArticle } from './0-technical-article/TechnicalArticle';
import { LifeSharing } from './1-life-sharing/LifeSharing';
import { Software } from './2-software/Software';
import { KnowledgeCard } from './3-knowledge-card/KnowledgeCard';
import { Resume } from './4-resume/Resume';
import { Portfolio } from './5-portfolio/Portfolio';
import { Schedule } from './6-schedule/Schedule';
import { AboutMe } from './7-about-me/AboutMe';

// * --------------------------------------------------------------------------- style

const container = css`
  ${tw`ml-44 flex-1`}
`;

// * --------------------------------------------------------------------------- component

/**
 * show target info by url router
 */
export const Container: React.FC = () => {
  const { activeCategory } = useContainerService();

  const renderContainer = () => {
    switch (activeCategory) {
      case 'article':
        return <TechnicalArticle />;
      case 'lifeSharing':
        return <LifeSharing />;
      case 'software':
        return <Software />;
      case 'card':
        return <KnowledgeCard />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'schedule':
        return <Schedule />;
      case 'aboutMe':
        return <AboutMe />;
    }
  };

  return <div css={container}>{renderContainer()}</div>;
};
