/**
 * convert px to rem
 *
 * @param { number } px
 * @param { number | undefined } base
 * @return
 */
// FIXME: 不够健壮，不兼容 IE，自动获取前端 html 的代码无法在后端运行
export const pxToRem = (px: number, base?: number): string => {
  // const html = document && document.querySelector('html');
  // const rem = html && window.getComputedStyle(html).fontSize;
  // const remNumber = Number(rem?.replace('px', ''));

  return base ? `${px / base}rem` : `${px / 16}rem`;
};
