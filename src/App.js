import React, { Component } from 'react';
import { Text } from 'react-native'
import Router from './Router';
import { Provider } from 'react-redux'
import store from './store/store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App