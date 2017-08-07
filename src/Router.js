import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './component/Auth/login'
import SignUp from './component/Auth/signup'
import Dashboard from './component/Doctor/dashboard'
import PatientList from './component/Doctor/patientList'
import PatientAdd from './component/Doctor/patientAdd'
import PatientSearch from './component/Doctor/patientSearch'

const RouterComponent = () => {
    return (
        <Router>

            <Scene key="auth">
                {/*<Scene key="login" component={LoginForm} hideNavBar={true} />*/}
                {/*<Scene key="signup" component={SignUp} hideNavBar={true} />*/}
                <Scene key="dashboard" component={Dashboard} hideNavBar={true} />
                <Scene key="patientadd" component={PatientAdd} hideNavBar={true} />
                <Scene key="patientlist" component={PatientList} hideNavBar={true} />
                <Scene key="patientsearch" component={PatientSearch} hideNavBar={true} />

            </Scene>

            {/*<Scene key="main">
                <Scene key="dashboard" component={Dashboard} hideNavBar={true} initial />
                <Scene key="patientadd" component={PatientCreate} hideNavBar={true}  />

            </Scene>*/}

        </Router>
    );
};

export default RouterComponent;
