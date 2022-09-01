import {FeedStream, IDisabledFeedStream, IEnabledFeedStream, INewFeedStream, IProxy} from '../../domain';
import {fetchStream as streamService} from '../../services';
import {streamSlice} from '../reducers';
import {TypedDispatch} from '../store';
import {getErrorMessage} from './common';

const appendStream = (stream: INewFeedStream, proxy: IProxy | null) => async (dispatch: TypedDispatch) => {
  dispatch(streamSlice.actions.appendStreamFetching());
  try {
    const newStream = await streamService(stream, proxy);
    dispatch(streamSlice.actions.appendStreamSuccess(newStream));
  } catch (e) {
    const message = getErrorMessage(e);
    dispatch(streamSlice.actions.appendStreamFailure(message));
  }
};

const enableStream = (stream: IDisabledFeedStream) => async (dispatch: TypedDispatch) => {
  dispatch(streamSlice.actions.enableStream(stream));
}

const disableStream = (stream: IEnabledFeedStream) => async (dispatch: TypedDispatch) => {
  dispatch(streamSlice.actions.disableStream(stream));
}

const removeStream = (stream: FeedStream) => async (dispatch: TypedDispatch) => {
  dispatch(streamSlice.actions.removeStream(stream));
}

export {appendStream, enableStream, disableStream, removeStream};
