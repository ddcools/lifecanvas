import { combineReducers } from 'redux';
import visitorEventSlice from '../components/VisitorCard/visitorEventSlice';

const rootReducer = combineReducers({
  visitorEvent: visitorEventSlice,
});

export default rootReducer;
