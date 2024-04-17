import { createSlice } from '@reduxjs/toolkit';

export const startOfTheWeekStore = createSlice({
  name: 'dateStore',
  initialState: new Date().toISOString(),
  reducers: {
    setDate: (state, action: { payload: string }) => {
      state = new Date(action.payload).toISOString();
      return state;
    },
  },
});
