import React from 'react';

import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TutorInterface } from 'src/constant';

export type TutorBoxProps = TutorInterface & {
  selected?: boolean;
  onClick: () => void;
  selectAble: boolean;
};

export const TutorBox: React.FC<TutorBoxProps> = ({
  name,
  profile,
  college,
  major,
  acceptPercentage,
  lesson,
  selected = false,
  selectAble = true,
  onClick,
}) => {
  return (
    <div className="tutor-box" onClick={onClick}>
      <div className="tutor-inner-box flex flex-row gap-x-1">
        <div className="flex flex-col gap-y-2 flex-1">
          <div className="flex gap-4">
            <img src={profile} alt={name} className="w-[4.5rem] h-[4.5rem] rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-black text-[1.2rem] font-bold">{name}</span>
              <span className="text-[#525C73] text-[0.9rem] font-medium">{college}</span>
              <span className="text-[#8596B2] text-[0.8rem] font-medium">{major}</span>
            </div>
          </div>
          <p className="text-[#b4bcc8] text-[0.94rem] font-medium">
            수락률 <span className="text-black font-[400]">{acceptPercentage}%</span>
          </p>
          <div className="bg-[#EDF4FE] w-fit px-2 rounded-md text-[0.94rem] font-medium">
            <p className="text-[#4D96F7]">
              {lesson.duration}분 수업: {lesson.number}
            </p>
          </div>
        </div>
        {selectAble && (
          <div className="flex flex-col align-center justify-center">
            <FontAwesomeIcon
              className="color-transition"
              icon={faCircleCheck}
              size="xl"
              color={selected ? '#8575E4' : '#BBC6DA'}
            />
            <span
              className="text-[0.8rem] text-center font-medium color-transition"
              style={{ color: selected ? '#8575E4' : '#BBC6DA' }}
            >
              선택하기
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
