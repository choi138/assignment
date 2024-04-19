import { useSelector } from 'react-redux';

import { RootState } from 'src/store';

export const useCheckAvailableClassTime = () => {
  const { classDay } = useSelector(({ classDayStore }: RootState) => classDayStore);

  const availableTime = (startTime: Date, endTime: Date) => {
    if (!classDay) return false;
    return classDay <= endTime && classDay >= startTime;
  };

  return { availableTime };
};
