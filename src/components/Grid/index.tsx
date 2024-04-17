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
    <span className="absolute top-0 right-0  text-l text-[#AEBACC] px-1">{cell.hourAndMinute}</span>
    {(cell.hourAndMinute === '새벽 3시' || cell.hourAndMinute === '오후 14시') && (
      <FontAwesomeIcon icon={faEllipsisVertical} style={{ position: 'relative', top: '10px' }} color="#E6EBF2" />
    )}
  </div>
);

export interface GridProps {
  days: Days;
  rowHeight: number;
  onCellClick?: (cell: Cell) => void;
  CellContent?: (cell: Cell) => ReactNode;
}

export const Grid: React.FC<GridProps> = ({ days, rowHeight, onCellClick, CellContent }) => {
  return (
    <div className="flex w-full">
      <div
        className="sticky left-0 grid pointer-events-none w-20 bg-white z-30"
        style={{
          display: 'grid',
          gridRowStart: 1,
          gridRowEnd: -1,
          gridColumnStart: 1,
          gridTemplateRows: `repeat(${days[0].cells.length + 1}, minmax(${rowHeight}px, 1fr))`,
        }}
      >
        {days[0].cells.map(
          (cell, cellIndex) =>
            getMinutes(cell.date) === 0 && <TimeCell key={getUnixTime(cell.date)} cell={cell} cellIndex={cellIndex} />,
        )}
      </div>
      <div className="flex-col w-11/12">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${days.length}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${days[0].cells.length}, minmax(${rowHeight}px, 1fr))`,
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
          {days.map((day) =>
            day.cells.map((cell) => (
              <button
                key={getUnixTime(cell.date)}
                className="relative border-t-2 border-r-2 border-gray transition-colors cursor-pointer hover:bg-gray disabled:bg-gray"
                disabled={cell.disabled}
                onClick={() => onCellClick?.(cell)}
              >
                {CellContent && CellContent(cell)}
              </button>
            )),
          )}
        </div>
      </div>
    </div>
  );
};
