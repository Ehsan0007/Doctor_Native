import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'
import PatientReducer from './PatientReducer'
import PatientFetchReducer from './PatientFetchReducer'

const rootReducer = combineReducers({
  auth: AuthReducer,
  patient: PatientReducer,
  patientList: PatientFetchReducer
});
export default rootReducer;