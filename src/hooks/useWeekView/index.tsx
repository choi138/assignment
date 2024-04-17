import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Day,
  Locale,
  addDays,
  eachDayOfInterval,
  eachMinuteOfInterval,
  endOfDay,
  format,
  isToday,
  isWeekend,
  startOfDay,
  startOfWeek,
} from 'date-fns';

import { RootState } from 'src/store';

const CONVERT_TIME: { [key: string]: string } = {
  '00:00': '자정 0시',
  '01:00': '새벽 1시',
  '02:00': '새벽 2시',
  '03:00': '새벽 3시',
  '05:00': '오전 5시',
  '06:00': '오전 6시',
  '07:00': '오전 7시',
  '08:00': '오전 8시',
  '09:00': '오전 9시',
  '10:00': '오전 10시',
  '11:00': '오전 11시',
  '12:00': '점오 12시',
  '13:00': '오후 13시',
  '14:00': '오후 14시',
  '19:00': '저녁 19시',
  '20:00': '저녁 20시',
  '21:00': '저녁 21시',
  '22:00': '저녁 22시',
};

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
  const dispatch = useDispatch();

  const [startOfTheWeek, setStartOfTheWeek] = useState(
    startOfWeek(startOfDay(initialDate || new Date()), { weekStartsOn }),
  );

  const nextWeek = () => {
    const nextWeek = addDays(startOfTheWeek, 7);
    if (disabledWeek && disabledWeek(nextWeek)) return;
    setStartOfTheWeek(nextWeek);
    dispatch({ type: 'dateStore/setDate', payload: nextWeek.toISOString() });
  };

  const previousWeek = () => {
    const previousWeek = addDays(startOfTheWeek, -7);
    if (disabledWeek && disabledWeek(previousWeek)) return;
    setStartOfTheWeek(previousWeek);
    dispatch({ type: 'dateStore/setDate', payload: previousWeek.toISOString() });
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
    dayOfMonthWithZero: format(day, 'd', { locale }),
    name: format(day, 'EEEE', { locale }),
    shortName: format(day, 'EEE', { locale }),
    disabled: disabledDay ? disabledDay(day) : false,
    isWeekend: isWeekend(day),
    cells: eachMinuteOfInterval(
      {
        start: startOfDay(day),
        end: endOfDay(day),
      },
      {
        step: minuteStep,
      },
    )
      .filter((date) => CONVERT_TIME[format(date, 'HH:mm')])
      .map((date) => ({
        date,
        hourAndMinute: CONVERT_TIME[format(date, 'HH:mm')],
        disabled: disabledCell ? disabledCell(date) : false,
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
