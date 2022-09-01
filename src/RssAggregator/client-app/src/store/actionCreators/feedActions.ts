import {castToPrimitiveSortedFeed, FeedSource, IProxy} from '../../domain';
import {TypedDispatch} from '../store';
import {feedSlice} from '../reducers';
import {fetchFeed as feedService} from '../../services';
import {getErrorMessage} from './common';

const fetchFeed = (source: FeedSource, proxy: IProxy | null = null) => async (dispatch: TypedDispatch) => {
  dispatch(feedSlice.actions.feedFetching());
  try {
    const feed = await feedService(source, proxy);
    const primitiveFeed = castToPrimitiveSortedFeed(feed);
    dispatch(feedSlice.actions.feedFetchingSuccess(primitiveFeed));
  } catch (e) {
    const message = getErrorMessage(e);
    dispatch(feedSlice.actions.feedFetchingFailure(message));
  }
};

export {fetchFeed};
