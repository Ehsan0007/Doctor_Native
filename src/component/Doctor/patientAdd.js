import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { Actions } from 'react-native-router-flux'
import HeaderComp from '../common/header'

class PatientAdd extends Component {
    render() {
        return (
            <Container>
                <HeaderComp header="Patient Add" name="arrow-back" press={() => Actions.dashboard()}/>
                <Text>Patient Add</Text>
            </Container>
        )
    }
}


export default PatientAdd;