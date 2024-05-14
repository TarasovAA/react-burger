import {store} from './store';
import { ThunkAction } from 'redux-thunk';

import { TIngredientsAction } from './ingredients/action';
import { TConstructorAction } from './constructor/action';
import { TOrderAction } from './order/action';
import { WsConnectionAction } from './web-socket/wsActionType';

export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов приложения
export type TApplicationActions = TIngredientsAction
                                | TConstructorAction
                                | TOrderAction
                                | WsConnectionAction;

// Типизация thunk'ов в нашем приложении

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch