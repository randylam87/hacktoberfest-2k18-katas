export const dayOfWeekLater = (S, K) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayIndex = days.indexOf(S);
  if(dayIndex === -1 || K === undefined){
    throw 'Enter valid day code';
  }
  const laterDays = K % 7;
  const laterDayIndex = (dayIndex + laterDays) % 7;
  return days[laterDayIndex];
};
