import {IArticle} from '../../domain';
import {createSlice} from '@reduxjs/toolkit';

interface IFeedState {
  feed: IArticle[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IFeedState = {
  feed: [],
  isLoading: false,
  error: null
}

const slice = createSlice({
  name: 'article',
  initialState: initialState,
  reducers: {
  }
})
