// 받아오는 사이즈 값이 number일 시 px로 변환한다.
export const typeOfSize = (size) => {
  return typeof size === 'number' ? `${size}px` : size;
};
