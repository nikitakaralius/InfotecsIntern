import {SortedFeed} from '../../domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IFeedState {
  feed: SortedFeed;
  isLoading: boolean;
  error: string | null;
}

const initialState: IFeedState = {
  feed: SortedFeed.empty(),
  isLoading: false,
  error: null
};

const feedSlice = createSlice({
  name: 'feed',
  initialState: initialState,
  reducers: {
    feedFetching(state) {
      state.isLoading = true;
    },

    feedFetchingSuccess(state, action: PayloadAction<SortedFeed>) {
      state.error = null;
      state.feed = action.payload;
    },

    feedFetchingFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.feed = SortedFeed.empty();
    }
  }
});

export {feedSlice};
