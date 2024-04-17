import React from 'react';

import { WeekViewHeader } from '../WeekViewHeader';

export const WeekView: React.FC = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden w-full">
      <WeekViewHeader />
    </div>
  );
};
