import { all, takeLatest } from 'redux-saga/effects';
import { Types as MessageTypes } from '../ducks/message';
import { messageSuccess, messageError } from './message';

export default function* rootSaga() {
  return yield all([
    takeLatest(MessageTypes.MESSAGE_SUCCESS, messageSuccess),
    takeLatest(MessageTypes.MESSAGE_FAILURE, messageError),
  ]);
}
