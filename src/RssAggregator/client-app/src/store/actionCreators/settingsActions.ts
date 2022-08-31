import {IProxy} from '../../domain';
import {settingsSlice} from '../reducers';
import {TypedDispatch} from '../store';

const addProxy = (proxy: IProxy) => async (dispatch: TypedDispatch) => {
  dispatch(settingsSlice.actions.addProxy(proxy));
}

export {addProxy};
