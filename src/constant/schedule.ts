import { setHours, setMinutes } from 'date-fns';

export interface ScheduleItems {
  startDate: Date;
  endDate: Date;
  closed: boolean;
}

export interface ScheduleDataItems {
  duration: number;
  schedules: ScheduleItems[];
}

export const SCHEDULES_DATA: ScheduleDataItems[] = [
  {
    duration: 20,
    schedules: [
      {
        startDate: setMinutes(setHours(new Date('2024-04-19'), 21), 0),
        endDate: setMinutes(setHours(new Date('2024-04-19'), 21), 30),
        closed: false,
      },
      {
        startDate: setMinutes(setHours(new Date(), 22), 0),
        endDate: setMinutes(setHours(new Date(), 22), 30),
        closed: true,
      },
      {
        startDate: setMinutes(setHours(new Date('2024-04-20'), 0), 0),
        endDate: setMinutes(setHours(new Date('2024-04-20'), 0), 30),
        closed: false,
      },
      {
        startDate: setMinutes(setHours(new Date('2024-04-19'), 0), 30),
        endDate: setMinutes(setHours(new Date('2024-04-19'), 1), 0),
        closed: false,
      },
    ],
  },
  {
    duration: 40,
    schedules: [
      {
        startDate: setMinutes(setHours(new Date('2024-04-19'), 1), 0),
        endDate: setMinutes(setHours(new Date('2024-04-19'), 1), 30),
        closed: false,
      },
      {
        startDate: setMinutes(setHours(new Date(), 10), 30),
        endDate: setMinutes(setHours(new Date(), 11), 0),
        closed: false,
      },
      {
        startDate: setMinutes(setHours(new Date('2024-04-20'), 0), 0),
        endDate: setMinutes(setHours(new Date('2024-04-20'), 0), 30),
        closed: true,
      },
      {
        startDate: setMinutes(setHours(new Date('2024-04-20'), 2), 0),
        endDate: setMinutes(setHours(new Date('2024-04-20'), 2), 30),
        closed: false,
      },
    ],
  },
];
