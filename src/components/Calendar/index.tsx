import React, { useEffect, useState } from 'react';
import { DateFormatter, DateRange, DayPicker } from 'react-day-picker';
import { useDispatch } from 'react-redux';
import 'react-day-picker/dist/style.css';

import { ko } from 'date-fns/locale';
import { endOfWeek, format, lastDayOfWeek, startOfWeek } from 'date-fns';

import { CONVERT_DAYS } from 'src/constant';
import { WeekStoreProps, weekStore } from 'src/store/weekStore';

import { calendarCss } from './style';

export const Calendar: React.FC = () => {
  const dispatch = useDispatch();

  const today = new Date();

  const [selectedWeekRange, setSelectedWeekRange] = useState<DateRange | undefined>(undefined);
  const [weekEndDays, setWeekEndDays] = useState({ startDay: startOfWeek(today), lastDay: endOfWeek(today) });

  const formatCaption: DateFormatter = (month) => {
    return <>{format(month, 'yyyy년 MM월')}</>;
  };

  const handleDayClick = (day: Date | undefined) => {
    if (!day) return;
    const startOfWeekDate = startOfWeek(day);
    const endOfWeekDate = endOfWeek(day);
    setWeekEndDays({ startDay: startOfWeekDate, lastDay: endOfWeekDate });
    setSelectedWeekRange({ from: startOfWeekDate, to: endOfWeekDate });
  };

  useEffect(() => {
    const week: WeekStoreProps[] = [];
    let currentDay = weekEndDays.startDay;
    while (currentDay <= weekEndDays.lastDay) {
      week.push({ date: currentDay.getDate(), day: CONVERT_DAYS[currentDay.getDay()] });
      currentDay = new Date(currentDay);
      currentDay.setDate(currentDay.getDate() + 1);
    }
    dispatch(weekStore.actions.setWeek(week));
  }, [selectedWeekRange]);

  useEffect(() => {
    setSelectedWeekRange({ from: startOfWeek(today), to: endOfWeek(today) });
  }, []);

  return (
    <>
      <style>{calendarCss}</style>
      <DayPicker
        mode="single"
        required
        defaultMonth={today}
        selected={selectedWeekRange ? selectedWeekRange.from : today}
        onSelect={(date) => handleDayClick(date)}
        modifiers={{
          selectedWeek: selectedWeekRange ? selectedWeekRange : [],
          lastDayOfWeek: lastDayOfWeek(weekEndDays.lastDay),
          firstDayOfWeek: startOfWeek(weekEndDays.startDay),
        }}
        modifiersClassNames={{
          selectedWeek: 'selected-week',
          lastDayOfWeek: 'last-day-of-week',
          firstDayOfWeek: 'first-day-of-week',
        }}
        formatters={{ formatCaption }}
        locale={ko}
      />
    </>
  );
};
