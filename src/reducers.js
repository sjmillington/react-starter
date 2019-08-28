import { combineReducers } from 'redux';
import globalReducer from './global_store/reducer';
import timerReducer from './containers/AnotherPage/reducer';

console.log(timerReducer)

const rootReducer = combineReducers({
  global: globalReducer,
  timer: timerReducer
})

export default rootReducer;