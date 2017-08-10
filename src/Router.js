import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './component/Auth/login'
import SignUp from './component/Auth/signup'
import Dashboard from './component/Doctor/dashboard'
import PatientListContainer from './component/Doctor/patientList'
import AddPatientContainer from './Container/addPatient'
import PatientSearch from './component/Doctor/patientSearch'
import PatientProfile from './component/Doctor/patientProfile'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} hideNavBar={true} />
                <Scene key="signup" component={SignUp} hideNavBar={true} />
                <Scene key="dashboard" component={Dashboard} hideNavBar={true} />
                <Scene key="patientadd" component={AddPatientContainer} hideNavBar={true} />
                <Scene key="patientlist" component={PatientListContainer} hideNavBar={true} />
                <Scene key="patientsearch" component={PatientSearch} hideNavBar={true} />
                <Scene key="patientprofile" component={PatientProfile} hideNavBar={true} />

            </Scene>

        </Router>
    );
};

export default RouterComponent;
