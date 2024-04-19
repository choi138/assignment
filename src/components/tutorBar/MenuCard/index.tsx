import React from 'react';
import { useSelector } from 'react-redux';

import { TUTORS, TutorMenuItems } from 'src/constant';
import { useCheckAvailableClassTime } from 'src/hooks';
import { RootState } from 'src/store';

export interface MenuCardProps extends TutorMenuItems {
  setSelectedMenu: React.Dispatch<React.SetStateAction<TutorMenuItems['type']>>;
  selectedMenu: TutorMenuItems['type'];
}

export const MenuCard: React.FC<MenuCardProps> = ({ type, name, selectedMenu, setSelectedMenu }) => {
  const { availableTime } = useCheckAvailableClassTime();
  const { duration } = useSelector(({ selectTicketDurationStore }: RootState) => selectTicketDurationStore);

  const onPressCategory = (type: TutorMenuItems['type']) => {
    setSelectedMenu(type);
  };

  const filterTutorType = (type: TutorMenuItems['type']) => {
    switch (type) {
      case 'available':
        return TUTORS.filter(
          (tutor) => availableTime(tutor.startTime, tutor.endTime) && tutor.lesson.duration === duration,
        );
      case 'marked':
        return TUTORS.filter((tutor) => tutor.type?.marked);
      case 'recommend':
        return TUTORS.filter((tutor) => tutor.type?.recommend);
      default:
        return [];
    }
  };

  return (
    <div
      className="w-full flex items-center justify-center text-sm transition-all duration-200 ease-in-out"
      style={{
        backgroundColor: selectedMenu === type ? '#f5f5f5' : 'white',
        borderBottom: selectedMenu === type ? '1.5px solid #8575e4' : '1.5px solid #E2E7EB',
        padding: '0.8rem 0.2rem',
        cursor: 'pointer',
      }}
      onClick={() => onPressCategory(type)}
    >
      <p className="font-medium text-[0.9rem]" style={{ color: selectedMenu === type ? '#8575e4' : '#000000' }}>
        {name} ({filterTutorType(type).length})
      </p>
    </div>
  );
};
