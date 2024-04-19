import { createSlice } from '@reduxjs/toolkit';

export interface ClassDayStoreProp {
  classDay: Date | null;
}

export const classDayStore = createSlice({
  name: 'classDayStore',
  initialState: { classDay: null } as ClassDayStoreProp,
  reducers: {
    setDuration: (state, action: { payload: Date }) => {
      state.classDay = action.payload;
      return state;
    },
  },
});
