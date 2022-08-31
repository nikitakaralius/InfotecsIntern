import {IProxy} from '../../domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IProxyState {
  proxy: IProxy | null;
}

const initialState: IProxyState = {
  proxy: null
};

const proxySlice = createSlice({
  name: 'proxy',
  initialState: initialState,
  reducers: {
    addProxy(state, action: PayloadAction<IProxy>) {
      state.proxy = action.payload;
    },

    resetProxy(state) {
      state.proxy = null;
    }
  }
});

export {proxySlice};
