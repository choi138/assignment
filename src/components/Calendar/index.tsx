import React, { useEffect, useState } from 'react';
import { DateFormatter, DateRange, DayPicker } from 'react-day-picker';
import { useDispatch, useSelector } from 'react-redux';
import 'react-day-picker/dist/style.css';

import { ko } from 'date-fns/locale';
import { endOfWeek, format, lastDayOfWeek, startOfWeek } from 'date-fns';

import { startOfTheWeekStore } from 'src/store/startOfTheWeekStore';
import { RootState } from 'src/store/store';
import './styles.css';
import { TICKETS, TICKET_STATUS } from 'src/constant';
import { selectTicketDurationStore } from 'src/store';

export const Calendar: React.FC = () => {
  const selectedWeekDay = useSelector((state: RootState) => state.startOfTheWeekStore);
  const selectWeekDayDispatch = useDispatch();

  const ticketDurationDispatch = useDispatch();

  const today = new Date();

  const [month, setMonth] = useState<Date>(today);
  const [selectedWeekRange, setSelectedWeekRange] = useState<DateRange | undefined>(undefined);
  const [weekEndDays, setWeekEndDays] = useState({
    startDay: startOfWeek(selectedWeekDay),
    lastDay: endOfWeek(selectedWeekDay),
  });

  const formatCaption: DateFormatter = (month) => {
    return <>{format(month, 'yyyy년 MM월')}</>;
  };

  const handleDayClick = (day: Date | undefined) => {
    if (!day) return;
    const startOfWeekDate = startOfWeek(day);
    const endOfWeekDate = endOfWeek(day);
    selectWeekDayDispatch(startOfTheWeekStore.actions.setDate(startOfWeekDate.toISOString()));
    setWeekEndDays({ startDay: startOfWeekDate, lastDay: endOfWeekDate });
    setSelectedWeekRange({ from: startOfWeekDate, to: endOfWeekDate });
  };

  const onOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    ticketDurationDispatch(selectTicketDurationStore.actions.setDuration(Number(e.target.value)));
  };

  useEffect(() => {
    setWeekEndDays({ startDay: startOfWeek(selectedWeekDay), lastDay: endOfWeek(selectedWeekDay) });
    setSelectedWeekRange({ from: startOfWeek(selectedWeekDay), to: endOfWeek(selectedWeekDay) });
  }, [selectedWeekDay]);

  useEffect(() => {
    setMonth(weekEndDays.startDay);
  }, [weekEndDays]);

  return (
    <div
      className="flex flex-col gap-y-10 sticky"
      style={{
        position: 'sticky',
        top: '0',
        zIndex: 100,
        backgroundColor: 'white',
      }}
    >
      <select
        title="ticket selector"
        className="selector w-full p-[0.4rem] rounded-md border-2 border-[#E0E6F1]"
        onChange={onOptionChange}
      >
        <option value="20">
          20분 수업권 (
          {TICKETS.filter(({ status, duration }) => duration === 20 && status === TICKET_STATUS.UNUSED).length}회 남음)
        </option>
        <option value="40">
          40분 수업권 (
          {TICKETS.filter(({ status, duration }) => duration === 40 && status === TICKET_STATUS.UNUSED).length}회 남음)
        </option>
      </select>
      <DayPicker
        mode="single"
        required
        month={month}
        selected={selectedWeekRange ? selectedWeekRange.from : today}
        onMonthChange={setMonth}
        showOutsideDays
        onSelect={(date) => handleDayClick(date)}
        modifiers={{
          selectedWeek: selectedWeekRange ? selectedWeekRange : [],
          lastDayOfWeek: lastDayOfWeek(weekEndDays.lastDay),
          firstDayOfWeek: startOfWeek(weekEndDays.startDay),
          pastDays: { before: today },
        }}
        modifiersClassNames={{
          selectedWeek: 'selected-week',
          lastDayOfWeek: 'last-day-of-week',
          firstDayOfWeek: 'first-day-of-week',
          pastDays: 'past-days',
        }}
        formatters={{ formatCaption }}
        locale={ko}
      />
    </div>
  );
};
