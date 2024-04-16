import { createSlice } from '@reduxjs/toolkit';

export interface WeekStoreProps {
  date: number;
  day: string;
}

export const weekStore = createSlice({
  name: 'weekStore',
  initialState: [] as WeekStoreProps[][],
  reducers: {
    setWeek: (state, action: { payload: WeekStoreProps[] }) => {
      state.pop();
      state.push(action.payload);
    },
  },
});
