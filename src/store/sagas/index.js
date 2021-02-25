/**
 * @desc Dependencies
 */
import { all } from 'redux-saga/effects';
/**
 * @desc Sagas
 */
import authSagas from './onBoarding';

export default function* rootSaga() {
  yield all([authSagas()]);
}
