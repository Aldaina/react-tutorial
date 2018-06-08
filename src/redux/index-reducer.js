import {combineReducers} from 'redux';
import postReducer from './reducer/post-reducer';
import testReducer from './reducer/test-reducer';
const allReducer = combineReducers({
	post: postReducer,
	test: testReducer
});
export default allReducer;