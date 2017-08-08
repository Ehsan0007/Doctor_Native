import {
    PATIENT_NAME,
    PATIENT_DISEASE,
    PATIENT_MEDICATION,
    COST,
    PATIENT_CREATE,
    PATIENT_CREATE_SUCCESS,
    PATIENT_CREATE_FAIL
} from '../actions/types'

const INITIAL_STATE = {
    patientname: '',
    patientdisease: '',
    patientmedication: '',
    cost: '',
    loading: false,
    users: null
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case PATIENT_NAME:
            return { ...state, patientname: action.payload };
        case PATIENT_DISEASE:
            return { ...state, patientdisease: action.payload };
        case PATIENT_MEDICATION:
            return { ...state, patientmedication: action.payload };
        case COST:
            return { ...state, cost: action.payload };
        case PATIENT_CREATE_SUCCESS:
            return { ...state, users: action.payload, loading: true };
        default:
            return state;
    }
};    