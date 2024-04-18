import { createSlice } from '@reduxjs/toolkit';

export interface SelectTicketDurationStoreProp {
  duration: number;
}

export const selectTicketDurationStore = createSlice({
  name: 'ticketDurationStore',
  initialState: { duration: 20 } as SelectTicketDurationStoreProp,
  reducers: {
    setDuration: (state, action: { payload: number }) => {
      state.duration = action.payload;
      return state;
    },
  },
});
