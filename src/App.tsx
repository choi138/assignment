import React from 'react';

import { Calendar, TutorBar, WeekView } from './components';

export const App: React.FC = () => {
  return (
    <div className="flex justify-between px-8 gap-x-2 pr-0 overflow-x-auto">
      <div className="flex w-full justify-between gap-x-6">
        <Calendar />
        <WeekView />
      </div>
      <TutorBar />
    </div>
  );
};
