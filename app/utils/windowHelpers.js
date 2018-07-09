export const pageSize = (width) => {
  const object = {
    xl: width > 1200,
    lg: width <= 1200 && width > 992,
    md: width <= 992 && width > 768,
    sm: width <= 768 && width > 480,
    xs: width <= 480,
  };
  const index = Object.values(object).indexOf(true);
  return Object.keys(object)[index];
};
export const remSelfAdaption = () => {
  const { innerWidth } = window;
  const object = {
    xl: 100, // 1rem = 100px
    lg: 90,
    md: 80,
    sm: 85,
    xs: 70,
  };
  const size = pageSize(innerWidth);
  document.documentElement.style.fontSize = `${object[size]}px`;
};
