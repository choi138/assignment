import React from 'react';

import { Calendar, TutorBar, WeekView } from './components';

export const App: React.FC = () => {
  return (
    <div className="flex justify-between px-8 gap-x-2">
      <div className="flex w-full justify-between py-8 gap-x-6">
        <Calendar />
        <WeekView />
      </div>
      <TutorBar />
    </div>
  );
};
