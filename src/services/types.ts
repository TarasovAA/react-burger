import {store} from './store';
import { ThunkAction } from 'redux-thunk';

import { TIngredientsAction } from './ingredients/action';
import { TConstructorAction } from './constructor/action';
import { TOrderAction } from './order/action';
import { TFeedAction } from './feed/reducer';
import { TUserInfoAction } from './auth/reducer';
import { TWsFeedAction } from './web-socket/ws-actions/feed';
import { TWsOrdersHistoryAction } from './web-socket/ws-actions/orders-history';
import { rootReducer } from './reducer';

export type RootState = ReturnType<typeof rootReducer>;

// Типизация всех экшенов приложения
export type TApplicationActions = TIngredientsAction
                                | TConstructorAction
                                | TOrderAction
                                | TFeedAction
                                | TUserInfoAction
                                | TWsFeedAction
                                | TWsOrdersHistoryAction;

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