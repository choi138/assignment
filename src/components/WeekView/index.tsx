import React from 'react';

import { useWeekView } from 'src/hooks';

import { WeekViewHeader } from '../WeekViewHeader';

export const WeekView: React.FC = () => {
  const { days, goToToday, nextWeek, previousWeek } = useWeekView();
  // console.log('days', days);

  return (
    <div className="flex flex-col h-full overflow-hidden w-full">
      <WeekViewHeader goToToday={goToToday} nextWeek={nextWeek} previousWeek={previousWeek} />
      <div className="flex flex-col flex-1 overflow-hidden select-none">
        <div className="flex flex-col flex-1 isolate overflow-auto">
          <div className="flex flex-col flex-none min-w-[700px]">
            {days.map((day) => (
              <p key={day.name}>{day.date.toString()}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
