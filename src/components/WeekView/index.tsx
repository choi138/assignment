import React from 'react';

import { ko } from 'date-fns/locale';

import { useWeekView } from 'src/hooks';

import { WeekViewHeader } from '../WeekViewHeader';
import { DaysHeader } from '../DaysHeader';
import { Grid } from '../Grid';

export const WeekView: React.FC = () => {
  const { days, goToToday, nextWeek, previousWeek } = useWeekView({ locale: ko });

  return (
    <div className="flex flex-col h-full overflow-hidden w-full">
      <WeekViewHeader goToToday={goToToday} nextWeek={nextWeek} previousWeek={previousWeek} />
      <div className="flex flex-col flex-1 overflow-hidden select-none">
        <div className="flex flex-col flex-1 isolate overflow-auto">
          <div className="flex flex-col flex-none min-w-[700px]">
            <DaysHeader days={days} />
            <div className="grid grid-cols-1 grid-rows-1">
              <div className="row-start-1 col-start-1">
                <Grid days={days} rowHeight={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
