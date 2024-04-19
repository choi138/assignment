import React from 'react';
import { useSelector } from 'react-redux';

import { TUTORS, TutorInterface } from 'src/constant';
import { RootState } from 'src/store';

export interface TutorFilterSectionProps {
  setTutorAccent: React.Dispatch<React.SetStateAction<string>>;
  setTutorMajor: React.Dispatch<React.SetStateAction<string>>;
  setTutorGender: React.Dispatch<React.SetStateAction<TutorInterface['gender'] | string>>;
}

export const TutorFilterSection: React.FC<TutorFilterSectionProps> = ({
  setTutorAccent,
  setTutorMajor,
  setTutorGender,
}) => {
  const { classDay } = useSelector(({ classDayStore }: RootState) => classDayStore);

  const availableTime = (startTime: Date, endTime: Date) => {
    if (!classDay) return false;
    return classDay <= endTime && classDay >= startTime;
  };

  const onSelectOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setTutorAccent(value);
  };

  const onSelectMajorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setTutorMajor(value);
  };

  const onSelectGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as TutorInterface['gender'];
    setTutorGender(value);
  };

  const filterTutorOption = (option: 'accent' | 'major') => {
    return TUTORS.filter(
      (tutor, index, tutorList) => tutorList.findIndex((t) => t[option] === tutor[option]) === index,
    );
  };

  return (
    <div className="w-full flex justify-between gap-x-2 px-2">
      <select title="gender" className="selector-box" onChange={onSelectGenderChange}>
        <option value="">성별</option>
        <option value="Male">남자</option>
        <option value="FeMale">여자</option>
      </select>
      <select title="accent" className="selector-box" onChange={onSelectOptionChange}>
        <option value="">억양</option>
        {filterTutorOption('accent').map(({ accent }, index) => (
          <option key={index} value={accent}>
            {accent}
          </option>
        ))}
      </select>
      <select title="major" className="selector-box " onChange={onSelectMajorChange}>
        <option value="">전공</option>
        {filterTutorOption('major').map(({ major }, index) => (
          <option key={index} value={major}>
            {major}
          </option>
        ))}
      </select>
    </div>
  );
};
