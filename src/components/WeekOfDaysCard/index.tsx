import React from 'react';

import { WeekStoreProps } from 'src/store/weekStore';

export interface WeekOfDaysCardProps {
  index: number;
  item: WeekStoreProps;
  week: WeekStoreProps[][];
}

export const WeekOfDaysCard: React.FC<WeekOfDaysCardProps> = ({ index, item, week }) => {
  const today = new Date();

  const isEndOrStartOfWeek = index === 0 || index === week[0].length - 1;
  const isToday = item.date === today.getDate();

  const textColor = isEndOrStartOfWeek ? `text-[#E74555]` : isToday ? `text-[#FFFFFF]` : 'text-dark';
  const dateStyle = `text-lg ${textColor} font-normal`;
  const todayStyle = `center flex mt-2 text-lg rounded-full bg-[#8575e4] text-[#FFFFFF] w-8 h-8`;

  return (
    <th scope="col" className={`${isToday && 'flex'} flex-col center px-6 py-3`} key={index}>
      <p className={isEndOrStartOfWeek ? `text-[#E74555]` : isToday ? `text-[#8575e4]` : 'text-dark'}>{item.day}</p>
      <div className={isToday ? todayStyle : 'mt-2'}>
        <p className={dateStyle}>{item.date}</p>
      </div>
    </th>
  );
};
