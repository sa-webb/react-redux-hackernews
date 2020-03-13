import { takeEvery, all } from 'redux-saga/effects';
import { STORIES_FETCH } from '../constants/actions';
import { handleFetchStories } from './storySaga';

function* watchAll() {
  yield all([takeEvery(STORIES_FETCH, handleFetchStories)]);
}

export default watchAll;
