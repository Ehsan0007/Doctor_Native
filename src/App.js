import React, { Component } from 'react';
import { Text } from 'react-native'
import Router from './Router';
import { Provider } from 'react-redux'
import store from './store/store'
import firebase from 'firebase'

class App extends Component {
    render() {
        var config = {
            apiKey: "AIzaSyA_Deqg48qutMfLzB-RtVL7jRWqE0kn5GQ",
            authDomain: "nativeauth-2f153.firebaseapp.com",
            databaseURL: "https://nativeauth-2f153.firebaseio.com",
            projectId: "nativeauth-2f153",
            storageBucket: "nativeauth-2f153.appspot.com",
            messagingSenderId: "544288181838"
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