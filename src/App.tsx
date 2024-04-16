import React from 'react';

import { Calendar } from './components';

export const App: React.FC = () => {
  return (
    <div className="flex justify-between p-8">
      <Calendar />
      <h1 className="text-xl">Hello World</h1>
    </div>
  );
};
