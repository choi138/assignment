import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { RootState, classDayStore } from 'src/store';

export type Event = {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
};

export interface EventCardProps {
  closed: boolean;
  startDate: Date;
}

export const EventCard: React.FC<EventCardProps> = ({ closed, startDate }) => {
  const { duration } = useSelector(({ selectTicketDurationStore }: RootState) => selectTicketDurationStore);
  const dispatch = useDispatch();

  const isOverHalfHour = startDate.getMinutes() >= 29;

  const formatDate = () => {
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

    const month = startDate.getMonth() + 1;
    const day = startDate.getDate();
    const weekday = weekdays[startDate.getDay()];
    const hours = startDate.getHours();
    console.log('hours', hours);
    const amOrPm = hours === 0 ? '자정' : hours < 12 ? '오전' : '오후';
    const formattedHours = hours % 12 || '00';
    const minutes = String(startDate.getMinutes()).padStart(2, '0');
    return `${month}월 ${day}일(${weekday}) ${amOrPm} ${formattedHours}:${minutes}`;
  };

  const onClick = () => {
    const formattedDate = formatDate();
    dispatch(classDayStore.actions.setDuration(formattedDate));
  };

  if (duration === 40) {
    return (
      <div
        className="bg-white hover-parent w-11/12 relative z-10 h-full flex center border-2 border-primary rounded-xl gap-x-2 py-1 px-1 hover:bg-primary hover:text-white transition-all duration-150 ease-in-out"
        style={{
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -3px rgb(0 0 0 / 0.1)',
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faUser} />
        <h1 className="text-placeHolder text-base max-xl:text-xs ">튜터 선택</h1>
      </div>
    );
  } else
    return (
      <div
        className="absolute flex center left-0 right-0"
        style={{
          top: isOverHalfHour ? '50%' : 0,
          bottom: isOverHalfHour ? 0 : '50%',
        }}
        onClick={onClick}
      >
        {closed ? (
          <div className=" relative z-10 w-full flex center gap-x-2 h-full bg-[#E6EBF2]">
            <h1 className="text-[#AAB4C6]">예약 마감</h1>
          </div>
        ) : (
          <div
            className="hover-parent w-11/12 relative z-10  h-full flex center border-2 border-primary rounded-xl gap-x-2 py-1 px-1 hover:bg-primary hover:text-white transition-all duration-150 ease-in-out"
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
