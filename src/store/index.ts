import { configureStore } from '@reduxjs/toolkit';

import { startOfTheWeekStore } from './startOfTheWeekStore';

export const store = configureStore({
  reducer: {
    startOfTheWeekStore: startOfTheWeekStore.reducer, // counter에 대한 reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
