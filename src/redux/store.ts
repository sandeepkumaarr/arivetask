import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {CategoryDetailsSlice} from './reducers/categoryDetailsReducer';

const reducer = combineReducers({
  categoryDetails: CategoryDetailsSlice.reducer,
});

export default configureStore({
  reducer,
  devTools: true,
});
