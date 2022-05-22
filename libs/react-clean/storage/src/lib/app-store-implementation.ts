import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '@clean-archi-front-end/counter/ui-react';
import thunk from 'redux-thunk';

const rootReducer = {
  counter: counterReducer,
};

export const appStoreImplementation = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppRootState = ReturnType<typeof appStoreImplementation.getState>;
