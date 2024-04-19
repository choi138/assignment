import { createSlice } from '@reduxjs/toolkit';

import { TutorInterface } from 'src/constant';

export interface SelectedTutorStoreProp {
  tutor: TutorInterface | null;
}

export const selectedTutorStore = createSlice({
  name: 'selectedTutorStore',
  initialState: { tutor: null } as SelectedTutorStoreProp,
  reducers: {
    setTutor: (state, action: { payload: TutorInterface }) => {
      state.tutor = action.payload;
      return state;
    },
  },
});
