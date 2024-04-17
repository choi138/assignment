import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export interface WeekViewHeaderProps {
  goToToday: () => void;
  nextWeek: () => void;
  previousWeek: () => void;
}

export const WeekViewHeader: React.FC<WeekViewHeaderProps> = ({ goToToday, nextWeek, previousWeek }) => {
  return (
    <header className="flex items-center justify-start gap-x-3 select-none">
      <h1 className="borderCard" onClick={goToToday}>
        오늘
      </h1>
      <h1 className="borderCard" onClick={previousWeek}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </h1>
      <h1 className="borderCard" onClick={nextWeek}>
        <FontAwesomeIcon icon={faChevronRight} />
      </h1>
    </header>
  );
};
