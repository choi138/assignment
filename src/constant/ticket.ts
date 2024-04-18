export enum TICKET_STATUS {
  USED = 'USED',
  UNUSED = 'UNUSED',
}

export const TICKETS = [
  {
    id: 1,
    duration: 20,
    status: TICKET_STATUS.USED,
  },
  {
    id: 1,
    duration: 20,
    status: TICKET_STATUS.UNUSED,
  },
  {
    id: 1,
    duration: 20,
    status: TICKET_STATUS.UNUSED,
  },
  {
    id: 1,
    duration: 40,
    status: TICKET_STATUS.UNUSED,
  },
  {
    id: 1,
    duration: 40,
    status: TICKET_STATUS.USED,
  },
  {
    id: 1,
    duration: 40,
    status: TICKET_STATUS.USED,
  },
];
