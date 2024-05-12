import {store} from './store';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator, Dispatch } from 'redux';

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

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена

//1 метод
//export type AppDispatch = typeof store.dispatch;

//2 метод
export type AppDispatch = Dispatch<TApplicationActions>;