import React from 'react';
import { useSelector } from 'react-redux';

import { TUTORS } from 'src/constant/tutors';
import { RootState } from 'src/store';

export const TutorBar: React.FC = () => {
  const { classDay } = useSelector(({ classDayStore }: RootState) => classDayStore);

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
            <div className="tutor-box">
              <div className="tutor-inner-box flex flex-col gap-y-4">
                <h1>튜터 직접 선택</h1>
                <div className="w-full flex justify-between gap-x-2">
                  <select title="gender" className="selector-box ">
                    <option value="gender">성별</option>
                    <option value="male">남자</option>
                    <option value="feMale">여자</option>
                  </select>
                  <select title="accent" className="selector-box ">
                    <option value="accent">억양</option>
                    {TUTORS.filter(
                      (tutor, index, tutorList) => tutorList.findIndex((t) => t.accent === tutor.accent) === index,
                    ).map((tutor, index) => (
                      <option key={index} value={tutor.accent}>
                        {tutor.accent}
                      </option>
                    ))}
                  </select>
                  <select title="major" className="selector-box ">
                    <option value="major">전공</option>
                    {TUTORS.filter(
                      (tutor, index, tutorList) => tutorList.findIndex((t) => t.major === tutor.major) === index,
                    ).map((tutor, index) => (
                      <option key={index} value={tutor.major}>
                        {tutor.major}
                      </option>
                    ))}
                  </select>
                </div>
                <div>asdf</div>
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
