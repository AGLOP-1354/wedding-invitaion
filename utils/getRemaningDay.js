import dayjs from 'dayjs';

const getRemainingDays = (targetDateStr) => {
  const today = dayjs();
  const targetDate = dayjs(targetDateStr);
  const daysRemaining = targetDate.diff(today, 'day');
  return daysRemaining;
}

export default getRemainingDays;
