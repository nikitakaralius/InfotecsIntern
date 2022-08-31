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

const articleSlice = createSlice({
  name: 'article',
  initialState: initialState,
  reducers: {
    feedFetching(state) {
      state.isLoading = true;
    },

    feedFetchingSuccess(state, action: PayloadAction<SortedFeed>) {
      state.isLoading = false;
      state.error = null;
      state.feed = action.payload;
    },

    feedFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.feed = SortedFeed.empty();
    }
  }
});

export {articleSlice};
