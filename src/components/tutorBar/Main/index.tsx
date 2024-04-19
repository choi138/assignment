import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TUTOR_MENUS, TutorInterface, TutorMenuItems, TUTORS } from 'src/constant';
import { RootState } from 'src/store';
import { selectedTutorStore } from 'src/store/tutorSelection';
import { useCheckAvailableClassTime } from 'src/hooks';

import { TutorBox } from '../TutorBox';
import { TutorFilterSection } from '../TutorFilterSection';
import { MenuCard } from '../MenuCard';

export const TutorBar: React.FC = () => {
  const dispatch = useDispatch();
  const { classDay } = useSelector(({ classDayStore }: RootState) => classDayStore);
  const { duration } = useSelector(({ selectTicketDurationStore }: RootState) => selectTicketDurationStore);
  const { tutor } = useSelector(({ selectedTutorStore }: RootState) => selectedTutorStore);

  const { availableTime } = useCheckAvailableClassTime();

  const [selectedMenu, setSelectedMenu] = useState<TutorMenuItems['type']>('available');
  const [tutorAccent, setTutorAccent] = useState<string>('');
  const [tutorMajor, setTutorMajor] = useState<string>('');

  const formatDate = () => {
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    if (!classDay) return '';

    const month = classDay.getMonth() + 1;
    const day = classDay.getDate();
    const weekday = weekdays[classDay.getDay()];
    const hours = classDay.getHours();
    const amOrPm = hours === 0 ? '자정' : hours < 12 ? '오전' : '오후';
    const formattedHours = hours % 12 || '00';
    const minutes = String(classDay.getMinutes()).padStart(2, '0');
    return `${month}월 ${day}일(${weekday}) ${amOrPm} ${formattedHours}:${minutes}`;
  };

  const onTutorClick = (id: number) => {
    dispatch(selectedTutorStore.actions.setTutor(TUTORS.find((tutor) => tutor.id === id) as TutorInterface));
  };

  const filterTutors = ({ startTime, endTime, type, accent, major, lesson }: TutorInterface) => {
    const filterOption = tutorAccent !== '' ? accent === tutorAccent : true;
    const filterMajor = tutorMajor !== '' ? major === tutorMajor : true;

    switch (selectedMenu) {
      case 'available':
        return filterMajor && filterOption && availableTime(startTime, endTime) && lesson.duration === duration;
      case 'marked':
        return filterMajor && filterOption && type?.marked;
      case 'recommend':
        return filterMajor && filterOption && type?.recommend;
      default:
        return false;
    }
  };

  return (
    <div className="sticky top-0 h-screen w-[35rem] border-l-[1.5px] border-border">
      <div className="h-full">
        {classDay ? (
          <>
            <div className="tutor-box">
              <div className="tutor-inner-box">
                <h1>{formatDate()}</h1>
              </div>
            </div>
            <div className="tutor-box border-0">
              <div className="tutor-inner-box flex flex-col gap-y-4 pb-0 px-0">
                <h1 className="px-2">튜터 직접 선택</h1>
                <TutorFilterSection setTutorAccent={setTutorAccent} setTutorMajor={setTutorMajor} />
                <div className="w-full flex justify-between">
                  {TUTOR_MENUS.map((menu, index) => (
                    <MenuCard {...menu} key={index} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
                  ))}
                </div>
              </div>
            </div>
            <div className="tutor-box">
              <div className="tutor-inner-box py-5">
                <p className=" text-[0.8rem] text-[#AAB4C6] font-medium">선택한 시간에 수업 가능한 튜터들입니다.</p>
              </div>
            </div>
            {TUTORS.filter(filterTutors).map((t) => (
              <TutorBox
                key={t.id}
                {...t}
                selected={t === tutor}
                onClick={() => onTutorClick(t.id)}
                selectAble={selectedMenu === 'available'}
              />
            ))}
          </>
        ) : (
          <div className="h-full flex flex-col center text-[#b4bcc8] font-medium text-[0.9rem]">
            아직 선택된 날짜가 없어요
          </div>
        )}
      </div>
    </div>
  );
};
