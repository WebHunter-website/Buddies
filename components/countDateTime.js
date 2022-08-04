const countDateTime = date => {
  const msToMinutes = ms => ms / 1000 / 60;
  const msToHours = ms => msToMinutes(ms) / 60;
  const msToDays = ms => msToHours(ms) / 24;

  const now = new Date();
  const tauntDate = new Date(date);

  const millisecondsGone = now - tauntDate;
  const minutesGone = msToMinutes(millisecondsGone);
  const hoursGone = msToHours(millisecondsGone);
  const daysGone = msToDays(millisecondsGone);

  return {
    useMinutes: hoursGone < 1,
    minutes: Math.floor(minutesGone),
    useHours: daysGone < 1,
    hours: Math.floor(hoursGone),
    useDays: daysGone >= 1,
    days: Math.floor(daysGone),
  };
};

export default countDateTime;
