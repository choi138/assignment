import { configureStore } from '@reduxjs/toolkit';

import { startOfTheWeekStore } from './startOfTheWeekStore';
import { selectTicketDurationStore } from './selectTicketDurationStore';
import { classDayStore } from './classDayStore';
import { selectedTutorStore } from './tutorSelection';

export const store = configureStore({
  reducer: {
    startOfTheWeekStore: startOfTheWeekStore.reducer,
    selectTicketDurationStore: selectTicketDurationStore.reducer,
    classDayStore: classDayStore.reducer,
    selectedTutorStore: selectedTutorStore.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
