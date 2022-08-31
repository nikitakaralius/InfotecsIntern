import {IPrimitiveSortedFeed, SortedFeed} from '../../domain';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IFeedState {
  articles: IPrimitiveSortedFeed;
  isLoading: boolean;
  error: string | null;
}

const initialState: IFeedState = {
  articles: {
    content: []
  },
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

    feedFetchingSuccess(state, action: PayloadAction<IPrimitiveSortedFeed>) {
      state.isLoading = false;
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
