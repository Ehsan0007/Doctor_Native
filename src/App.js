import React, { Component } from 'react';
import { Text } from 'react-native'
import Router from './Router';
import { Provider } from 'react-redux'
import store from './store/store'
import firebase from 'firebase'

class App extends Component {
    render() {
        var config = {
            apiKey: "AIzaSyCasoQbRX_Yif0WOIruvZeqK8tU3zi-gvQ",
            authDomain: "doctorapprepo.firebaseapp.com",
            databaseURL: "https://doctorapprepo.firebaseio.com",
            projectId: "doctorapprepo",
            storageBucket: "",
            messagingSenderId: "5607623637"
        };
        firebase.initializeApp(config);
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App