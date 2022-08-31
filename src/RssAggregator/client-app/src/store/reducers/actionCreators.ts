import {fetchFeed as service} from '../../services';
import {FeedSource, IProxy} from '../../domain';
import {feedSlice} from './feedSlice';
import {TypedDispatch} from '../store';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

const fetchFeed = (source: FeedSource, proxy?: IProxy) => async (dispatch: TypedDispatch) => {
  dispatch(feedSlice.actions.feedFetching());
  try {
    const feed = await service(source, proxy);
    dispatch(feedSlice.actions.feedFetchingSuccess(feed));
  } catch (e) {
    const message = getErrorMessage(e);
    dispatch(feedSlice.actions.feedFetchingFailure(message));
  }
};

export {fetchFeed};
