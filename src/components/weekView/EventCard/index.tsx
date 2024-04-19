import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { RootState, classDayStore } from 'src/store';
import { TutorInterface } from 'src/constant';
import { useModal } from 'src/provider';
import { formatDate } from 'src/utils';
import { selectedTutorStore } from 'src/store/tutorSelection';

export interface EventCardProps {
  closed: boolean;
  startDate: Date;
  setSelectedTime: React.Dispatch<React.SetStateAction<Date | null>>;
  selectedTime: Date | null;
  tutor: TutorInterface | null;
}

export const EventCard: React.FC<EventCardProps> = ({ closed, startDate, setSelectedTime, selectedTime, tutor }) => {
  const { duration } = useSelector(({ selectTicketDurationStore }: RootState) => selectTicketDurationStore);
  const { tutor: selectorTutor } = useSelector(({ selectedTutorStore }: RootState) => selectedTutorStore);
  const { open, close } = useModal();
  const dispatch = useDispatch();

  const isOverHalfHour = startDate.getMinutes() >= 29;

  const onRemoveTutor = () => {
    const newTutor = selectorTutor.filter((t) => t.startTime.toISOString() !== startDate?.toISOString());
    dispatch(selectedTutorStore.actions.setTutor(newTutor));
    close();
  };

  const onClick = () => {
    if (closed) return;
    if (tutor) {
      return open({
        children: (
          <div className="w-full tutor-box h-full flex center p-0 border-0">
            <div className="w-full tutor-inner-box p-0 flex flex-col gap-y-4">
              <p className="text-left font-medium">{formatDate(startDate)}</p>
              <div className="flex gap-x-1">
                <img src={tutor.profile} alt={tutor.name} className="w-[2rem] h-[2rem] rounded-full object-cover" />
                <p className="text-left font-medium">{tutor.name}</p>
              </div>
              <p className="font-medium text-[#AAAAAA]">
                이미 수업이 예약되었어요
                <br />
                수업을 삭제할까요?
              </p>
              <div className="flex center gap-x-2 cursor-pointer">
                <div className="flex center w-[40%] gap-x-2">
                  <div className="day-box rounded-md py-1 shadow-none" onClick={() => close()}>
                    아니요
                  </div>
                  <div className="day-box rounded-md bg-primary text-white py-1 shadow-none" onClick={onRemoveTutor}>
                    예
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      });
    }
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
          <div className="day-box bg-primary" onClick={onClick}>
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
