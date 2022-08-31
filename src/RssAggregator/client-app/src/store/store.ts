import {combineReducers, configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

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

