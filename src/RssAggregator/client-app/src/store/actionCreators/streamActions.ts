import {INewFeedStream, IProxy} from '../../domain';
import {fetchStream as streamService} from '../../services';
import {streamSlice} from '../reducers';
import {TypedDispatch} from '../store';
import {getErrorMessage} from './common';

const appendStream = (stream: INewFeedStream, proxy?: IProxy) => async (dispatch: TypedDispatch) => {
  dispatch(streamSlice.actions.appendStreamFetching());
  try {
    const newStream = await streamService(stream, proxy);
    dispatch(streamSlice.actions.appendStreamSuccess(newStream));
  } catch (e) {
    const message = getErrorMessage(e);
    dispatch(streamSlice.actions.appendStreamFailure(message));
  }
};

export {appendStream};
