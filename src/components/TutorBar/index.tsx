import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { TUTOR_MENUS, TutorMenuItems, TUTORS } from 'src/constant';
import { RootState } from 'src/store';

export const TutorBar: React.FC = () => {
  const { classDay } = useSelector(({ classDayStore }: RootState) => classDayStore);

  const [selectedMenu, setSelectedMenu] = useState(TUTOR_MENUS.map(() => false));

  const onPressCategory = (index: number) => {
    setSelectedMenu((prev) => prev.map((_, i) => (i === index ? true : false)));
  };

  const filterTutorOption = (option: 'accent' | 'major') => {
    return TUTORS.filter(
      (tutor, index, tutorList) => tutorList.findIndex((t) => t[option] === tutor[option]) === index,
    );
  };

  const filterTutorType = (type: TutorMenuItems['type']) => {
    return TUTORS.filter((tutor) => tutor.type?.[type]);
  };

  return (
    <div className="sticky top-0 h-screen w-[20rem] border-l-2 border-border" style={{}}>
      <div className="h-full">
        {classDay ? (
          <>
            <div className="tutor-box">
              <div className="tutor-inner-box">
                <h1>{classDay}</h1>
              </div>
            </div>
            <div className="tutor-box border-0">
              <div className="tutor-inner-box flex flex-col gap-y-4 pb-0 px-0">
                <h1 className="px-2">튜터 직접 선택</h1>
                <div className="w-full flex justify-between gap-x-2 px-2">
                  <select title="gender" className="selector-box ">
                    <option value="gender">성별</option>
                    <option value="male">남자</option>
                    <option value="feMale">여자</option>
                  </select>
                  <select title="accent" className="selector-box ">
                    <option value="accent">억양</option>
                    {filterTutorOption('accent')?.map((tutor, index) => (
                      <option key={index} value={tutor.accent}>
                        {tutor.accent}
                      </option>
                    ))}
                  </select>
                  <select title="major" className="selector-box ">
                    <option value="major">전공</option>
                    {filterTutorOption('major')?.map((tutor, index) => (
                      <option key={index} value={tutor.major}>
                        {tutor.major}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full flex justify-between">
                  {TUTOR_MENUS.map(({ name, type }, index) => (
                    <div
                      key={index}
                      className="w-full flex items-center justify-center text-sm transition-all duration-200 ease-in-out"
                      style={{
                        backgroundColor: selectedMenu[index] ? '#f5f5f5' : 'white',
                        borderBottom: selectedMenu[index] ? '2px solid #8575e4' : '2px solid #E2E7EB',
                        padding: '0.4rem 0.2rem',
                        cursor: 'pointer',
                      }}
                      onClick={() => onPressCategory(index)}
                    >
                      <p className="text-sm" style={{ color: selectedMenu[index] ? '#8575e4' : '#000000' }}>
                        {name} ({filterTutorType(type)?.length})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col center text-[#b4bcc8]">아직 선택된 날짜가 없어요</div>
        )}
      </div>
    </div>
  );
};
