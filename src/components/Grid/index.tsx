import React, { ReactNode } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { getMinutes, getUnixTime } from 'date-fns';

import { Cell, Days } from 'src/hooks';

const TimeCell: React.FC<{ cell: Cell; cellIndex: number }> = ({ cell, cellIndex }) => (
  <div
    className="flex items-center justify-center "
    style={{
      position: 'relative',
      gridRowStart: cellIndex + 2,
      gridRowEnd: cellIndex + 2,
      bottom: '12px',
    }}
  >
    <span className="absolute top-0 left-0  text-l text-[#AEBACC] px-1">{cell.hourAndMinute}</span>
    {(cell.hourAndMinute === '새벽 3시' || cell.hourAndMinute === '오후 14시') && (
      <FontAwesomeIcon icon={faEllipsisVertical} className=" relative top-[10px] " color="#E6EBF2" />
    )}
  </div>
);

export interface GridProps {
  days: Days;
  rowHeight: number;
  onCellClick?: (cell: Cell) => void;
  CellContent?: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ days, rowHeight, onCellClick, CellContent }) => {
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
                <p>{shortName}</p>
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
                  className={`relative ${!disableSelectedTime && 'border-r-2'} border-t-2  border-border cursor-pointer disabled:bg-disabled flex flex-col justify-between items-center `}
                  disabled={cell.disabled || disableSelectedTime}
                  style={{
                    gridRowStart: cellIndex + 1,
                    gridRowEnd: cellIndex + 2,
                    gridColumnStart: dayIndex + 1,
                    gridColumnEnd: dayIndex + 2,
                    // height의 2/1 지점에 border를 넣어서 시간을 표시
                  }}
                  onClick={() => onCellClick?.(cell)}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderTop: disableSelectedTime ? '0px' : '1px solid #E2E7EB',
                    }}
                  >
                    {CellContent && CellContent}
                  </div>
                  {/* <div
                    style={{
                      position: 'absolute',
                      bottom: '50%',
                      left: 0,
                      right: 0,
                      top: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {CellContent && CellContent}
                  </div> */}
                </button>
              );
            }),
          )}
        </div>
      </div>
    </div>
  );
};
