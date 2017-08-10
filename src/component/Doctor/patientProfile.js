import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tex, Card, CardItem } from 'native-base';
import HeaderComp from '../common/header';
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';

class PatientProfile extends Component {
    componentWillMount() {
        _.each(this.props.data, (value, prop) => {

        });
    }
    render() {
        return (
            <Container>
                <HeaderComp header="Patient Profile" name="arrow-back" press={() => Actions.patientlist()} />
                    <Image source={{uri : 'http://www.freebiesgallery.com/wp-content/uploads/2014/02/blurred-background-21.jpg'}} style={{width : '100%',height : 150}}/>
                     
            </Container>
        )
    }
}


export default PatientProfile;