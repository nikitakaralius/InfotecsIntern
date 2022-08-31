import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {feedSlice, proxySlice} from './reducers';

const rootReducer = combineReducers({
  article: feedSlice.reducer,
  proxy: proxySlice.reducer
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

type RootState = ReturnType<typeof rootReducer>;

type TypedStore = ReturnType<typeof setupStore>;

type TypedDispatch = TypedStore['dispatch'];

export {setupStore};
export type {RootState, TypedStore, TypedDispatch};

