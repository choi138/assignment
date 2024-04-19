import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { RootState, classDayStore } from 'src/store';

export interface EventCardProps {
  closed: boolean;
  startDate: Date;
  setSelectedTime: React.Dispatch<React.SetStateAction<Date | null>>;
  selectedTime: Date | null;
}

export const EventCard: React.FC<EventCardProps> = ({ closed, startDate, setSelectedTime, selectedTime }) => {
  const { duration } = useSelector(({ selectTicketDurationStore }: RootState) => selectTicketDurationStore);
  const { tutor } = useSelector(({ selectedTutorStore }: RootState) => selectedTutorStore);
  console.log(tutor);

  const dispatch = useDispatch();

  const isOverHalfHour = startDate.getMinutes() >= 29;

  const onClick = () => {
    if (closed) return;
    setSelectedTime(startDate);
    dispatch(classDayStore.actions.setDuration(startDate));
  };

  const selectedTimeStyle = selectedTime === startDate ? { color: 'white' } : {};

  if (duration === 40) {
    return (
      <>
        {closed ? (
          <div className=" relative z-10 w-full flex center gap-x-2 h-full bg-[#E6EBF2]">
            <h1 className="text-[#AAB4C6]">예약 마감</h1>
          </div>
        ) : (
          <div
            className="day-box "
            style={{
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -3px rgb(0 0 0 / 0.1)',
              backgroundColor: selectedTime === startDate ? '#8575e4' : 'white',
            }}
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faUser} style={selectedTimeStyle} />
            <h1 style={selectedTimeStyle} className="text-placeHolder text-base max-xl:text-xs ">
              튜터 선택
            </h1>
          </div>
        )}
      </>
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
            className="day-box"
            style={{
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -3px rgb(0 0 0 / 0.1)',
              backgroundColor: selectedTime === startDate ? '#8575e4' : 'white',
            }}
          >
            <FontAwesomeIcon icon={faUser} style={selectedTimeStyle} />
            <h1 style={selectedTimeStyle} className="text-placeHolder text-sm font-medium max-xl:text-xs ">
              튜터 선택
            </h1>
          </div>
        )}
      </div>
    );
};
