import React from 'react';

import { getUnixTime } from 'date-fns';

import { Days } from 'src/hooks';

export interface DaysHeaderProps {
  days: Days;
}

export const DaysHeader: React.FC<DaysHeaderProps> = ({ days }) => {
  return (
    <div className="sticky top-0 z-30 flex-none py-3 flex items-center justify-center">
      <div className="grid grid-cols-8 text-sm leading-6 w-full">
        {days.map(({ isToday, isWeekend, dayOfMonthWithZero, date, shortName }) => (
          <div key={getUnixTime(date)} className={`flex items-center justify-center`}>
            <div className={`flex-col center ${isWeekend ? 'text-weekend' : 'text-black'}`}>
              <p>{shortName}</p>
              <span
                className={`
                  text-xl
                  font-semibold text-slate-900
                  ${isWeekend ? 'text-weekend' : isToday ? 'text-white' : 'text-black'}
                  ${isToday && `flex items-center justify-center rounded-full w-9 h-9  text-white bg-primary`}
                `}
              >
                {dayOfMonthWithZero}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
