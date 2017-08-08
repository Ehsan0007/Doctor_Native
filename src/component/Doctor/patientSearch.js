import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import HeaderComp from '../common/header'
import { Actions } from 'react-native-router-flux'

class PatientSearch extends Component {
    render() {
        return (
            <Container>
                <HeaderComp header="Seacrh Patient" name="arrow-back" press={() => Actions.dashboard()} />
                <Text>Patient Search</Text>
            </Container>
        )
    }
}


export default PatientSearch;