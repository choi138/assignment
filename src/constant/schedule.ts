import { add, setHours, setMinutes } from 'date-fns';

export interface ScheduleItems {
  startDate: Date;
  endDate: Date;
  closed: boolean;
}

export interface ScheduleDataItems {
  duration: number;
  schedules: ScheduleItems[];
}

const today = new Date();

const tomorrow = add(today, { days: 1 });

export const SCHEDULES_DATA: ScheduleDataItems[] = [
  {
    duration: 20,
    schedules: [
      {
        startDate: setMinutes(setHours(tomorrow, 0), 0),
        endDate: setMinutes(setHours(tomorrow, 0), 30),
        closed: false,
      },
      {
        startDate: setMinutes(setHours(tomorrow, 1), 0),
        endDate: setMinutes(setHours(tomorrow, 1), 30),
        closed: false,
      },
      {
        startDate: setMinutes(setHours(tomorrow, 1), 30),
        endDate: setMinutes(setHours(tomorrow, 2), 0),
        closed: true,
      },
      {
        startDate: setMinutes(setHours(tomorrow, 2), 30),
        endDate: setMinutes(setHours(tomorrow, 3), 0),
        closed: true,
      },
      {
        startDate: setMinutes(setHours(tomorrow, 5), 30),
        endDate: setMinutes(setHours(tomorrow, 6), 0),
        closed: false,
      },
    ],
  },
  {
    duration: 40,
    schedules: [
      {
        startDate: setMinutes(setHours(tomorrow, 12), 30),
        endDate: setMinutes(setHours(tomorrow, 13), 0),
        closed: false,
      },
      {
        startDate: setMinutes(setHours(today, today.getHours() + 2), 0),
        endDate: setMinutes(setHours(today, today.getHours() + 2), 30),
        closed: true,
      },
      {
        startDate: setMinutes(setHours(tomorrow, 0), 0),
        endDate: setMinutes(setHours(tomorrow, 0), 30),
        closed: false,
      },
      {
        startDate: setMinutes(setHours(tomorrow, 10), 0),
        endDate: setMinutes(setHours(tomorrow, 10), 30),
        closed: false,
      },
      {
        startDate: setMinutes(setHours(tomorrow, 1), 30),
        endDate: setMinutes(setHours(tomorrow, 2), 0),
        closed: true,
      },
      {
        startDate: setMinutes(setHours(tomorrow, 2), 30),
        endDate: setMinutes(setHours(tomorrow, 3), 0),
        closed: true,
      },
      {
        startDate: setMinutes(setHours(tomorrow, 5), 30),
        endDate: setMinutes(setHours(tomorrow, 6), 0),
        closed: false,
      },
    ],
  },
];
