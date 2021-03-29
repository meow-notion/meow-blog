import logo from '@/assets/logo.svg';

/**
 * fetch logo && text fro back end
 *
 * provide img url && daily phrase
 *
 * @return
 */
export const useHeaderService = () => {
  // const imgUrl = 'https://cdn.surmon.me/images/logo.svg';
  const imgUrl = logo;
  const text = '欢迎来到 ♂ 绅士喵呜の妙妙屋！';

  return {
    text,
    imgUrl,
  };
};
