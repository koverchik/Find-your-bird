import {
  applyMiddleware,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { apiCreate } from './api/API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { auth } from './reducer/auth';
import { cities } from './reducer/cities';
import { rootSaga } from './sagas/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'cities'],
};

const rootReducer = combineReducers({ auth: auth, cities: cities });

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  sagaMiddleware,
];
export const store = configureStore({
  middleware: middleware,
  reducer: persistedReducer,
});

export const persister = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export const api = apiCreate();

sagaMiddleware.run(rootSaga);
