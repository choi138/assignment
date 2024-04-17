import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Day,
  Locale,
  addDays,
  eachDayOfInterval,
  eachMinuteOfInterval,
  endOfDay,
  format,
  isToday,
  startOfDay,
  startOfWeek,
} from 'date-fns';

import { RootState } from 'src/store';

export interface UseWeekViewProps {
  initialDate?: Date;
  minuteStep?: number;
  weekStartsOn?: Day;
  locale?: Locale;
  disabledCell?: (date: Date) => boolean;
  disabledDay?: (date: Date) => boolean;
  disabledWeek?: (startDayOfWeek: Date) => boolean;
}

export const useWeekView = ({
  initialDate,
  minuteStep = 30,
  weekStartsOn = 0,
  locale,
  disabledCell,
  disabledDay,
  disabledWeek,
}: UseWeekViewProps | undefined = {}) => {
  const startOfTheWeekStore = useSelector((state: RootState) => state.startOfTheWeekStore);

  const [startOfTheWeek, setStartOfTheWeek] = useState(
    startOfWeek(startOfDay(initialDate || new Date()), { weekStartsOn }),
  );

  const nextWeek = () => {
    const nextWeek = addDays(startOfTheWeek, 7);
    if (disabledWeek && disabledWeek(nextWeek)) return;
    setStartOfTheWeek(nextWeek);
  };

  const previousWeek = () => {
    const previousWeek = addDays(startOfTheWeek, -7);
    if (disabledWeek && disabledWeek(previousWeek)) return;
    setStartOfTheWeek(previousWeek);
  };

  const goToToday = () => {
    setStartOfTheWeek(startOfWeek(startOfDay(new Date()), { weekStartsOn }));
  };

  const days = eachDayOfInterval({
    start: startOfTheWeek,
    end: addDays(startOfTheWeek, 6),
  }).map((day) => ({
    date: day,
    isToday: isToday(day),
    name: format(day, 'EEEE', { locale }),
    shortName: format(day, 'EEE', { locale }),
    disabled: disabledDay ? disabledDay(day) : false,
    cells: eachMinuteOfInterval(
      {
        start: startOfDay(day),
        end: endOfDay(day),
      },
      {
        step: minuteStep,
      },
    ).map((hour) => ({
      date: hour,
      hour: format(hour, 'HH', { locale }),
      minute: format(hour, 'mm', { locale }),
      hourAndMinute: format(hour, 'HH:mm', { locale }),
      disabled: disabledCell ? disabledCell(hour) : false,
    })),
  }));

  useEffect(() => {
    setStartOfTheWeek(startOfWeek(startOfDay(startOfTheWeekStore), { weekStartsOn }));
  }, [startOfTheWeekStore]);

  return {
    days,
    nextWeek,
    previousWeek,
    goToToday,
    startOfTheWeek,
  };
};

export type Days = ReturnType<typeof useWeekView>['days'];
export type Cell = Days[number]['cells'][number];