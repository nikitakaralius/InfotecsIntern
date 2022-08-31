import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootState, TypedDispatch} from '../store';

const useTypedDispatch = useDispatch<TypedDispatch>()

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export {useTypedDispatch, useTypedSelector};
