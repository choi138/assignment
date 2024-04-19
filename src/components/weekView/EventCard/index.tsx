import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { RootState, classDayStore } from 'src/store';
import { TutorInterface } from 'src/constant';

export interface EventCardProps {
  closed: boolean;
  startDate: Date;
  setSelectedTime: React.Dispatch<React.SetStateAction<Date | null>>;
  selectedTime: Date | null;
  tutor: TutorInterface | null;
}

export const EventCard: React.FC<EventCardProps> = ({ closed, startDate, setSelectedTime, selectedTime, tutor }) => {
  const { duration } = useSelector(({ selectTicketDurationStore }: RootState) => selectTicketDurationStore);

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
          <div className="day-closed">
            <h1>예약 마감</h1>
          </div>
        ) : tutor ? (
          <div className="day-box bg-primary">
            <img src={tutor.profile} alt={tutor.name} className="w-[2rem] h-[2rem] rounded-full object-cover" />
            <p className="text-white text-base max-xl:text-xs font-bold">선택 완료</p>
          </div>
        ) : (
          <div
            className="day-box"
            style={{
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
          <div className="day-closed">
            <h1>예약 마감</h1>
          </div>
        ) : tutor ? (
          <div className="day-box bg-primary">
            <img src={tutor.profile} alt={tutor.name} className="w-[1.4rem] h-[1.4rem] rounded-full object-cover" />
            <p className="text-white text-sm max-xl:text-xs font-bold">선택 완료</p>
          </div>
        ) : (
          <div
            className="day-box"
            style={{
              backgroundColor: selectedTime === startDate ? '#9A8AFB' : 'white',
              border: selectedTime === startDate ? '1px solid #9A8AFB' : '1px solid #E2E7EB',
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
