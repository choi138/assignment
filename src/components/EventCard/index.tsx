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
      className="absolute flex center left-0 right-0"
      style={{
        top: isOverHalfHour ? '50%' : 0,
        bottom: isOverHalfHour ? 0 : '50%',
      }}
    >
      {closed ? (
        <div className=" relative z-10 w-full flex center gap-x-2 h-full bg-[#E6EBF2]">
          <h1 className="text-[#AAB4C6]">예약 마감</h1>
        </div>
      ) : (
        <div
          className="hover-parent w-11/12 relative z-10  flex center border-2 border-primary rounded-xl gap-x-2 py-1 px-1 hover:bg-primary hover:text-white transition-all duration-150 ease-in-out"
          style={{
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -3px rgb(0 0 0 / 0.1)',
          }}
        >
          <FontAwesomeIcon icon={faUser} />
          <h1 className="text-placeHolder text-base max-xl:text-xs ">튜터 선택</h1>
        </div>
      )}
    </div>
  );
};
