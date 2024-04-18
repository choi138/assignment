import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export type Event = {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
};

export interface EventCardProps {
  closed: boolean;
  isOverHalfHour: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ closed, isOverHalfHour }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: isOverHalfHour ? '50%' : 0,
        left: 0,
        right: 0,
        bottom: isOverHalfHour ? 0 : '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {closed ? (
        <div className=" relative z-10 w-full flex center gap-x-2 h-full bg-[#E6EBF2]">
          <h1 className="text-[#AAB4C6]">예약 마감</h1>
        </div>
      ) : (
        <div
          className=" w-11/12 relative z-10  flex center border-2 border-primary rounded-xl gap-x-2 py-1 px-1"
          style={{
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -3px rgb(0 0 0 / 0.1)',
          }}
        >
          <FontAwesomeIcon icon={faUser} />
          <h1 className="text-[#9A9A9A] text-base max-xl:text-xs">튜터 선택</h1>
        </div>
      )}
    </div>
  );
};
