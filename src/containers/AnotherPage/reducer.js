import produce from 'immer';
import { INCREMENT_TIMER } from './constants';

const initialState = {
  time: 0
}

const timerReducer = (state = initialState, action) => 
  produce(state, draft => {
    switch(action.type) {
    case INCREMENT_TIMER: 
      draft.time = state.time + 1;
      break;
    }
  });


export default timerReducer;