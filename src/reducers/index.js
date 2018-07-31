import { combineReducers } from 'redux';
import CountReducer from './counter_reducer';

const rootReducer = combineReducers({
	count: CountReducer
});

export default rootReducer;
