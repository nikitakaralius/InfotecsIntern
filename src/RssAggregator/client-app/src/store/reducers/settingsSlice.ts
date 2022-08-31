import {IProxy, ISettingsStorage} from '../../domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ISettingsState {
  storage: ISettingsStorage;
}

const initialState: ISettingsState = {
  storage: {
    updateStepSeconds: 60,
    proxy: null
  }
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialState,
  reducers: {
    addProxy(state, action: PayloadAction<IProxy>) {
      state.storage.proxy = action.payload;
    },

    resetProxy(state) {
      state.storage.proxy = null;
    },

    changeUpdateRate(state, action: PayloadAction<number>) {
      state.storage.updateStepSeconds = action.payload;
    }
  }
});

export {settingsSlice};
