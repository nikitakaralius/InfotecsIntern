import {
  castToPrimitiveStreamStorage,
  castToStreamStorage,
  IDisabledFeedStream,
  IEnabledFeedStream,
  IPrimitiveStreamStorage,
  StreamStorage
} from '../../domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IStreamState {
  storage: IPrimitiveStreamStorage;
  isLoading: boolean;
  error: string | null;
}

const initialState: IStreamState = {
  storage: {
    streams: [],
    source: []
  },
  isLoading: false,
  error: null
};

const operate = (
  storage: IPrimitiveStreamStorage,
  action: (_: StreamStorage) => void
) => {
  const streamStorage = castToStreamStorage(storage);
  action(streamStorage);
  return castToPrimitiveStreamStorage(streamStorage);
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
      state.storage = operate(state.storage, s => s.append(action.payload));
    },

    appendStreamFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    enableStream(state, action: PayloadAction<IDisabledFeedStream>) {
      state.storage = operate(state.storage, s => s.enable(action.payload));
    },

    disableStream(state, action: PayloadAction<IEnabledFeedStream>) {
      state.storage = operate(state.storage, s => s.disable(action.payload));
    }
  }
});

export {streamSlice};
