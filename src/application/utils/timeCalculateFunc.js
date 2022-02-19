export const timeCalculateFunc = (startDate, endDate) => {
  const endDayArr = endDate.split('-');
  const startDayArr = startDate.split('-');

  const endDay = new Date(endDayArr[0], endDayArr[1], endDayArr[2]);
  const startDay = new Date(startDayArr[0], startDayArr[1], startDayArr[2]);

  const btMs = endDay.getTime() - startDay.getTime();
  const btDay = btMs / (1000 * 60 * 60 * 24);

  return btDay;
};
