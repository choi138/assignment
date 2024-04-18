import React from 'react';
import { useSelector } from 'react-redux';

import { ko } from 'date-fns/locale';
import { isBefore, startOfWeek } from 'date-fns';

import { useWeekView } from 'src/hooks';
import { SCHEDULES_DATA } from 'src/constant';
import { RootState } from 'src/store';

import { WeekViewHeader } from '../WeekViewHeader';
import { Grid } from '../Grid';

export const WeekView: React.FC = () => {
  const { duration: selectorDuration } = useSelector(
    ({ selectTicketDurationStore }: RootState) => selectTicketDurationStore,
  );

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
    <div className="flex flex-col  w-full">
      <WeekViewHeader goToToday={goToToday} nextWeek={nextWeek} previousWeek={previousWeek} />
      <Grid
        days={days}
        rowHeight={6}
        scheduleData={SCHEDULES_DATA.filter(({ duration }) => duration === selectorDuration)}
      />
    </div>
  );
};
