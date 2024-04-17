import React, { ReactNode } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { getMinutes, getUnixTime } from 'date-fns';

import { Cell, Days } from 'src/hooks';

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
        className="sticky left-0 grid pointer-events-none w-20"
        style={{
          display: 'grid',
          gridRowStart: 1,
          gridRowEnd: -1,
          gridColumnStart: 1,
          gridTemplateRows: `repeat(${days[0].cells.length}, minmax(${rowHeight}px, 1fr))`,
        }}
      >
        {days[0].cells.map(
          (cell, cellIndex) =>
            getMinutes(cell.date) === 0 && (
              <div
                key={getUnixTime(cell.date)}
                className="relative flex items-center justify-center bottom-3"
                style={{
                  gridRowStart: cellIndex + 1,
                  gridRowEnd: cellIndex + 2,
                }}
              >
                <span className="absolute top-0 left-0 text-l text-[#AEBACC] px-1">{cell.hourAndMinute}</span>
                {(cell.hourAndMinute === '새벽 3시' || cell.hourAndMinute === '오후 14시') && (
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    style={{ position: 'relative', top: '10px' }}
                    color="#E6EBF2"
                  />
                )}
              </div>
            ),
        )}
      </div>
      <div
        className="border-t-2 border-l-2 border-gray w-11/12"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${days.length}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${days[0].cells.length}, minmax(${rowHeight}px, 1fr))`,
        }}
      >
        {days.map((day, dayIndex) =>
          day.cells.map((cell, cellIndex) => (
            <button
              key={getUnixTime(cell.date)}
              className="relative border-b-2 border-r-2 border-gray transition-colors cursor-pointer hover:bg-gray disabled:bg-gray"
              style={{
                gridRowStart: cellIndex + 1,
                gridRowEnd: cellIndex + 2,
                gridColumnStart: dayIndex + 2,
                gridColumnEnd: dayIndex + 1,
              }}
              disabled={cell.disabled}
              onClick={() => onCellClick?.(cell)}
            >
              {CellContent && CellContent(cell)}
            </button>
          )),
        )}
      </div>
    </div>
  );
};
