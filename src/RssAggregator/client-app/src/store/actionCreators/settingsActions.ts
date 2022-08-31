import {IProxy} from '../../domain';
import {settingsSlice} from '../reducers';
import {TypedDispatch} from '../store';

const addProxy = (proxy: IProxy) => async (dispatch: TypedDispatch) => {
  dispatch(settingsSlice.actions.addProxy(proxy));
}

const changeUpdateRate = (updateRate: number) => async (dispatch: TypedDispatch) => {
  dispatch(settingsSlice.actions.changeUpdateRate(updateRate));
}

export {addProxy, changeUpdateRate};
