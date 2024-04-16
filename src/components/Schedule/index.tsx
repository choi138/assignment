import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/store';

export const Schedule: React.FC = () => {
  const week = useSelector((state: RootState) => state.weekStore);
  return (
    <div>
      <h1>sdf</h1>
      {week.length > 0 &&
        week[0].map((item, index) => (
          <div key={index}>
            <h1>{item.date}</h1>
          </div>
        ))}
    </div>
  );
};
