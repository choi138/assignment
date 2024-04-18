// import { createSlice } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

// export interface selectTimeStoreProps {
//   date: string;
//   availableTutor: any;
//   closeTutor: any;
// }

// export const selectTimeStore = createSlice({
//   name: 'dateStore',
//   initialState: { date: '', availableTutor: [], closeTutor: [] } as selectTimeStoreProps,
//   reducers: {
//     setDate: (state, action: { payload: string }) => {
//       state = new Date(action.payload).toISOString();
//       return state;
//     },
//   },
// });

export interface SelectTicketDurationStoreProps {
  duration: number;
}

export const selectTicketDurationStore = createSlice({
  name: 'ticketDurationStore',
  initialState: { duration: 20 } as SelectTicketDurationStoreProps,
  reducers: {
    setDuration: (state, action: { payload: number }) => {
      state.duration = action.payload;
      return state;
    },
  },
});
