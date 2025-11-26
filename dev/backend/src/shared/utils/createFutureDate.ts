export const createFutureDateMinuteUTC =  (minuteToAdd: number): string => {
  const nowUTC = new Date(Date.now()); // Get current time in UTC
  const futureDateUTC = new Date(nowUTC);
  futureDateUTC.setUTCMinutes(nowUTC.getUTCMinutes() + minuteToAdd);
  return futureDateUTC.toISOString();
};

export const createFutureDateHoursUTC = (hoursToAdd: number): string => {
  const nowUTC = new Date(Date.now()); // Get current time in UTC
  const futureDateUTC = new Date(nowUTC);
  futureDateUTC.setUTCHours(nowUTC.getUTCHours() + hoursToAdd);
  return futureDateUTC.toISOString(); // Returns a string in ISO 8601 format
};