import React from 'react';

import { Calendar, WeekView } from './components';

export const App: React.FC = () => {
  return (
    <div className="flex justify-between p-8 gap-x-4">
      <Calendar />
      <WeekView />
      <h1 className="text-xl">Hello World</h1>
    </div>
  );
};
