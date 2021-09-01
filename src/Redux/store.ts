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
import { rootSaga } from './sagas/index';
import { rootReducer } from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'airports'],
};

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
