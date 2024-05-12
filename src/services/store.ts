import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from './reducer';
import { socketMiddleware } from './web-socket/socketMiddleware';

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat((socketMiddleware()))
  });
