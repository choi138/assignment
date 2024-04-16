import React, { useEffect, useState } from 'react';
import { DateFormatter, DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { ko } from 'date-fns/locale';
import { endOfWeek, format, lastDayOfWeek, startOfWeek } from 'date-fns';

import { calendarCss } from './style';

const pastMonth = new Date();

export const Calendar: React.FC = () => {
  const today = new Date();
  const [selectedWeekRange, setSelectedWeekRange] = useState<DateRange | undefined>(undefined);
  const [weekEndDays, setWeekEndDays] = useState({ startDay: startOfWeek(today), lastDay: endOfWeek(today) });

  const formatCaption: DateFormatter = (month) => {
    return <>{format(month, 'yyyy년 MM월', { locale: ko })}</>;
  };

  const handleDayClick = (day: Date | undefined) => {
    if (!day) return;
    const startOfWeekDate = startOfWeek(day);
    const endOfWeekDate = endOfWeek(day);
    setWeekEndDays({ startDay: startOfWeekDate, lastDay: endOfWeekDate });
    setSelectedWeekRange({ from: startOfWeekDate, to: endOfWeekDate });
  };

  useEffect(() => {
    setSelectedWeekRange({ from: startOfWeek(today), to: endOfWeek(today) });
  }, []);

  return (
    <>
      <style>{calendarCss}</style>
      <DayPicker
        mode="single"
        required
        defaultMonth={pastMonth}
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
      />
    </>
  );
};
