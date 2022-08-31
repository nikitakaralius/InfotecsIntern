import {IDisabledFeedStream, IEnabledFeedStream, StreamStorage} from '../../domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IStreamState {
  storage: StreamStorage;
  isLoading: boolean;
  error: string | null;
}

const initialState: IStreamState = {
  storage: StreamStorage.empty(),
  isLoading: false,
  error: null
};

const streamSlice = createSlice({
  name: 'stream',
  initialState: initialState,
  reducers: {
    appendStreamFetching(state) {
      state.isLoading = true;
    },

    appendStreamSuccess(state, action: PayloadAction<IEnabledFeedStream>) {
      state.isLoading = false;
      state.error = null;
      state.storage = state.storage.append(action.payload);
    },

    appendStreamFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    enableStream(state, action: PayloadAction<IDisabledFeedStream>) {
      state.storage.enable(action.payload);
    },

    disableStream(state, action: PayloadAction<IEnabledFeedStream>) {
      state.storage.disable(action.payload);
    }
  }
});

export {streamSlice};
