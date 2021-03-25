import logo from '../../../assets/logo.svg';

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
  const text = '我已经是只废猫了 QWQ ~~~~~';

  return {
    text,
    imgUrl,
  };
};
