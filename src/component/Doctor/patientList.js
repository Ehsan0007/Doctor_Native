import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import HeaderComp from '../common/header'
import { Actions } from 'react-native-router-flux'

class PatientList extends Component {
    render() {
        return (
            <Container>
                <HeaderComp header="Patient List" name="arrow-back" press={() => Actions.dashboard()} />
                <Text>Patient List</Text>
            </Container>
        )
    }
}


export default PatientList;