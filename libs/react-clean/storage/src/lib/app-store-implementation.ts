import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '@clean-archi-front-end/counter/ui-react';

const rootReducer = {
  counter: counterReducer,
};

export const counterSelector = (state: AppRootState) => state.counter;

export const appStoreImplementation = configureStore({
  reducer: rootReducer,
});

export type AppRootState = ReturnType<typeof appStoreImplementation.getState>;
