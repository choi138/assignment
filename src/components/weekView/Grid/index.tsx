import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { getMinutes, getUnixTime, isSameDay } from 'date-fns';

import { Cell, Days } from 'src/hooks';
import { ScheduleDataItems } from 'src/constant/schedule';
import { RootState } from 'src/store';

import { EventCard } from '../EventCard';

const TimeCell: React.FC<{ cell: Cell; cellIndex: number }> = ({ cell, cellIndex }) => (
  <div
    className="flex items-center justify-center "
    style={{
      position: 'relative',
      gridRowStart: cellIndex + 2,
      gridRowEnd: cellIndex + 2,
    }}
  >
    <span className="absolute top-0 left-0 font-medium text-sm text-[#AEBACC] px-1">{cell.hourAndMinute}</span>
    {(cell.hourAndMinute === '새벽 3시' || cell.hourAndMinute === '오후 14시') && (
      <FontAwesomeIcon icon={faEllipsisVertical} className=" relative top-[10px] " color="#E6EBF2" />
    )}
  </div>
);

export interface GridProps {
  days: Days;
  rowHeight: number;
  scheduleData?: ScheduleDataItems[];
}

export const Grid: React.FC<GridProps> = ({ days, rowHeight, scheduleData: schedules }) => {
  const { tutor } = useSelector(({ selectedTutorStore }: RootState) => selectedTutorStore);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  return (
    <div className="flex w-full justify-between">
      <div
        className="sticky left-0 grid pointer-events-none w-20 bg-white z-30"
        style={{
          display: 'grid',
          gridRowStart: 1,
          gridRowEnd: -1,
          gridColumnStart: 1,
          gridTemplateRows: `repeat(${days[0].cells.length + 1}, minmax(${rowHeight}rem, 1fr))`,
        }}
      >
        {days[0].cells.map(
          (cell, cellIndex) =>
            getMinutes(cell.date) === 0 && <TimeCell key={getUnixTime(cell.date)} cell={cell} cellIndex={cellIndex} />,
        )}
      </div>
      <div className="flex-col w-11/12">
        <div
          className="py-4"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${days.length}, minmax(0, 1fr))`,
          }}
        >
          {days.map(({ isToday, isWeekend, dayOfMonthWithZero, date, shortName }) => (
            <div key={getUnixTime(date)} className={`flex items-center justify-center`}>
              <div className={`flex-col center ${isWeekend ? 'text-weekend' : 'text-black'}`}>
                <p className=" text-sm">{shortName}</p>
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${days.length}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${days[0].cells.length}, minmax(${rowHeight}rem, 1fr))`,
          }}
        >
          {days.map((day, dayIndex) =>
            day.cells.map((cell, cellIndex) => {
              const disableSelectedTime = cell.hourAndMinute === '새벽 3시' || cell.hourAndMinute === '오후 14시';
              return (
                <button
                  key={getUnixTime(cell.date)}
                  className={`relative ${!disableSelectedTime && 'border-r-2'} border-t-2  border-border cursor-pointer disabled:bg-disabled flex flex-col center `}
                  disabled={cell.disabled || disableSelectedTime}
                  style={{
                    gridRowStart: cellIndex + 1,
                    gridRowEnd: cellIndex + 2,
                    gridColumnStart: dayIndex + 1,
                    gridColumnEnd: dayIndex + 2,
                  }}
                >
                  <div className="absolute top-1/2 left-0 right-0 bottom-0 h-full border-dashed border-t border-border" />
                  {(schedules || []).map(({ schedules }) =>
                    schedules
                      .filter(({ startDate }) => {
                        const sameDay = isSameDay(startDate, cell.date);
                        const isSameTime = startDate.getHours() === cell.date.getHours();
                        return sameDay && isSameTime;
                      })
                      .map(({ closed, startDate }, scheduleIndex) => {
                        const isPastTime = cell.disabled;
                        const filteredTutor = tutor.filter(
                          ({ startTime }) => startTime.toISOString() === startDate.toISOString(),
                        );
                        return (
                          !isPastTime && (
                            <EventCard
                              tutor={tutor.length > 0 ? filteredTutor[0] : null}
                              key={scheduleIndex}
                              closed={closed}
                              startDate={startDate}
                              selectedTime={selectedTime}
                              setSelectedTime={setSelectedTime}
                            />
                          )
                        );
                      }),
                  )}
                </button>
              );
            }),
          )}
        </div>
      </div>
    </div>
  );
};
