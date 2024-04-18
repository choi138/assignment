import { createSlice } from '@reduxjs/toolkit';

export interface ClassDayStoreProp {
  classDay: string;
}

export const classDayStore = createSlice({
  name: 'classDayStore',
  initialState: { classDay: '' } as ClassDayStoreProp,
  reducers: {
    setDuration: (state, action: { payload: string }) => {
      state.classDay = action.payload;
      return state;
    },
  },
});
