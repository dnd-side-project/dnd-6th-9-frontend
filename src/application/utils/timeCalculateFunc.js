import moment from 'moment';

export const timeCalculateFunc = (startDate, endDate) => {
  const startDay = moment(startDate);
  const endDay = moment(endDate);

  return endDay.diff(startDay, 'days');
};
