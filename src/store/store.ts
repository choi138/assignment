import { configureStore } from '@reduxjs/toolkit';

import { startOfTheWeekStore } from './startOfTheWeekStore';
import { selectTicketDurationStore } from './selectTicketDurationStore';

export const store = configureStore({
  reducer: {
    startOfTheWeekStore: startOfTheWeekStore.reducer,
    selectTicketDurationStore: selectTicketDurationStore.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
