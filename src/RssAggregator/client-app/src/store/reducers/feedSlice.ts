import {SortedFeed} from '../../domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IFeedState {
  articles: SortedFeed;
  isLoading: boolean;
  error: string | null;
}

const initialState: IFeedState = {
  articles: SortedFeed.empty(),
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
      state.articles = action.payload;
    },

    feedFetchingFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.articles = SortedFeed.empty();
    }
  }
});

export {feedSlice};
