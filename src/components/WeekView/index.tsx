import React from 'react';

import { ko } from 'date-fns/locale';
import { isBefore, setHours, setMinutes, startOfWeek } from 'date-fns';

import { useWeekView } from 'src/hooks';
import { SCHEDULES } from 'src/constant/schedule';

import { WeekViewHeader } from '../WeekViewHeader';
import { Grid } from '../Grid';
import { EventCard } from '../EventCard';

export const WeekView: React.FC = () => {
  const { days, goToToday, nextWeek, previousWeek } = useWeekView({
    locale: ko,
    disabledCell: (date) => {
      return isBefore(date, new Date());
    },
    disabledWeek: (startDayOfWeek) => {
      return isBefore(startDayOfWeek, startOfWeek(new Date()));
    },
  });

  return (
    <div className="flex flex-col h-full overflow-hidden w-full">
      <WeekViewHeader goToToday={goToToday} nextWeek={nextWeek} previousWeek={previousWeek} />
      <div className="flex flex-col flex-1 overflow-hidden select-none">
        <div className="flex flex-col flex-1 isolate overflow-auto">
          <div className="flex flex-col flex-none min-w-[700px]">
            <div className="grid grid-cols-1 grid-rows-1">
              <div className="row-start-1 col-start-1">
                <Grid days={days} rowHeight={6} schedules={SCHEDULES} />
              </div>
              {/* <div className="row-start-1 col-start-1 w-11/12" style={{ border: '1px solid red', justifySelf: 'end' }}>
                <EventCard
                  days={days}
                  events={[
                    {
                      id: '1',
                      title: 'Meeting',
                      startDate: setMinutes(setHours(new Date(), 21), 0),
                      endDate: setMinutes(setHours(new Date(), 21), 30),
                    },
                    {
                      id: '2',
                      title: 'Meeting',
                      startDate: setMinutes(setHours(new Date(), 20), 0),
                      endDate: setMinutes(setHours(new Date(), 21), 30),
                    },
                  ]}
                  weekStartsOn={1}
                  minuteStep={30}
                  rowHeight={3}
                  onEventClick={() => console.log('asdf')}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
