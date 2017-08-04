import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './component/Auth/login'
import SignUp from './component/Auth/signup'
import Dashboard from './component/Doctor/dashboard'
import PatientCreate from './component/Doctor/patientList'

const RouterComponent = () => {
    return (
        <Router>

            <Scene key="auth">
                {/*<Scene key="login" component={LoginForm} hideNavBar={true} />*/}
                {/*<Scene key="signup" component={SignUp} hideNavBar={true} />*/}
                <Scene key="dashboard" component={Dashboard} hideNavBar={true} />

            </Scene>

            {/*<Scene key="main">
                <Scene key="dashboard" component={Dashboard} hideNavBar={true} initial />
                <Scene key="patientadd" component={PatientCreate} hideNavBar={true}  />

            </Scene>*/}

        </Router>
    );
};

export default RouterComponent;
