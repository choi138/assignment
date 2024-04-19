export const formatDate = (date: Date) => {
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  if (!date) return '';

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = weekdays[date.getDay()];
  const hours = date.getHours();
  const amOrPm = hours === 0 ? '자정' : hours < 12 ? '오전' : '오후';
  const formattedHours = hours % 12 || '00';
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${month}월 ${day}일(${weekday}) ${amOrPm} ${formattedHours}:${minutes}`;
};
