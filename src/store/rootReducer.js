import { combineReducers } from 'redux';
import authReducer from './slices/onBoarding';

export default combineReducers({ auth: authReducer });
