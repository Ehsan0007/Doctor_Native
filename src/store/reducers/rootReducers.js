import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'
import PatientReducer from './PatientReducer'

const rootReducer = combineReducers({
  auth: AuthReducer,
  patient: PatientReducer
});
export default rootReducer;