import { configureStore } from '@reduxjs/toolkit';
import { artApi } from './artApi';
import currentPageReducer from './slices/pageSlice';

import filter from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filter,
    currentPage: currentPageReducer,
    [artApi.reducerPath]: artApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
