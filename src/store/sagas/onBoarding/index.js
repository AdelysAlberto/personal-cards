import { put, takeLatest, call } from 'redux-saga/effects';
import * as userAddressActions from '../../slices/onBoarding';
import { saveDDJJ } from '../../api/onBoarding';

export function* fetchUserAddressWorker({ payload }) {
  try {
    yield put(userAddressActions.fetchUserAddressStart());

    const {
      response: { body },
    } = yield call(saveDDJJ, payload);

    yield put(userAddressActions.fetchUserAddressSuccess(body));
  } catch (error) {
    yield call(error);
    yield put(userAddressActions.fetchUserAddressFailure(error));
  }
}

export default function* userAddressSagas() {
  yield takeLatest(userAddressActions.fetchUserAddress, fetchUserAddressWorker);
}
