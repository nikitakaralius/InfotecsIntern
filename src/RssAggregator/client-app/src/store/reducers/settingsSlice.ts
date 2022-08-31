import {IProxy, ISettings} from '../../domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ISettingsState {
  settings: ISettings;
}

const initialState: ISettingsState = {
  settings: {
    updateStepSeconds: 60,
    proxy: null
  }
};

const settingsSlice = createSlice({
  name: 'proxy',
  initialState: initialState,
  reducers: {
    addProxy(state, action: PayloadAction<IProxy>) {
      state.settings.proxy = action.payload;
    },

    resetProxy(state) {
      state.settings.proxy = null;
    }
  }
});

export {settingsSlice};
