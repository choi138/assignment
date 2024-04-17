import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const WeekViewHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-start gap-x-3">
      <h1 className="borderCard">오늘</h1>
      <h1 className="borderCard">
        <FontAwesomeIcon icon={faChevronLeft} />
      </h1>
      <h1 className="borderCard">
        <FontAwesomeIcon icon={faChevronRight} />
      </h1>
    </header>
  );
};
