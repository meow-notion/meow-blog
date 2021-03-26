import React from 'react';
import tw, { css } from 'twin.macro';
import Slider from 'react-slick';

// * --------------------------------------------------------------------------- style

const container = css`
  // TODO: 可以抽成公用
  ${tw`w-full mb-4 h-52`}
  .slick-prev {
    ${tw`left-4 z-10`}
  }
  .slick-next {
    ${tw`right-4 z-10`}
  }
  .slick-dots {
    ${tw`bottom-4 z-10`}
  }
  .slick-dots li.slick-active button:before {
    ${tw`opacity-70 text-white`}
  }
`;

const slide = css`
  ${tw`h-52 w-20 bg-blue-400 rounded-md`}
`;

// * --------------------------------------------------------------------------- component

export const ArticleSwiper: React.FC = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div css={container}>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} css={slide} />
        ))}
      </Slider>
    </div>
  );
};
