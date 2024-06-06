import {combineReducers} from 'redux';
import {roleSlice} from './role-slice';

export const rootReducer = combineReducers({
  roleReducer: roleSlice.reducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
