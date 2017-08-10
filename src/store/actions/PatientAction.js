import firebase from '../../configs/db';
import { Actions } from 'react-native-router-flux'
import {
    PATIENT_NAME,
    PATIENT_DISEASE,
    PATIENT_MEDICATION,
    COST,
    GENDER,
    DATE,
    MOBILE,
    PATIENT_CREATE,
    PATIENT_CREATE_SUCCESS,
    PATIENT_CREATE_FAIL,
    LOAD_PATIENT_LIST_SUCCESS,


} from './types'

export class PatientAction {

    static onpatientNameChange = (text) => {
        return {
            type: PATIENT_NAME,
            payload: text
        };
    };

    static onpatientdiseaseChange = (text) => {
        return {
            type: PATIENT_DISEASE,
            payload: text
        };
    };

    static onpatientMedChange = (text) => {
        return {
            type: PATIENT_MEDICATION,
            payload: text
        };
    };

    static oncostChange = (text) => {
        return {
            type: COST,
            payload: text
        };
    };
    static onMObileChange = (text) => {
        return {
            type: MOBILE,
            payload: text
        };
    };
    static onGenderChange = (text) => {
        return {
            type: GENDER,
            payload: text
        };
    };
    static onDateChange = (text) => {
        return {
            type: DATE,
            payload: text
        };
    };


    static addPatient = (data) => {
        const { currentUser } = firebase.auth()
        return (dispatch) => {
            dispatch({ type: PATIENT_CREATE });
            firebase.database().ref(`/users/${currentUser.uid}/patient`)
                .push(data)
                .then(() => {
                    dispatch({ type: PATIENT_CREATE_SUCCESS, payload: data })
                    Actions.dashboard();
                })
        }
    }
    static loadPatientList = () => {
        const { currentUser } = firebase.auth()

        return (dispatch) => {
            firebase.database().ref(`/users/${currentUser.uid}/patient`)
            .on('value' ,snapshot =>{
                dispatch({type : LOAD_PATIENT_LIST_SUCCESS , payload : snapshot.val()});
            })
        }
    }

}




// export const employeeCreate = ({ name, phone, shift }) => {
//     const { currentUser } = firebase.auth();

//     return (dispatch) => {
//         firebase.database().ref(`/users/${currentUser.uid}/employees`)
//             .push({ name, phone, shift })
//             .then(() => {
//                 dispatch({ type: EMPLOYEE_CREATE });
//                 Actions.employeeList({ type: 'reset' })
//             });
//     };
// };

// export const employeesFetch = () => {
//     const { currentUser } = firebase.auth();

//     return (dispatch) => {
//         firebase.database().ref(`/users/${currentUser.uid}/employees`)
//             .on('value', snapshot => {
//                 dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
//             });
//     };
// };