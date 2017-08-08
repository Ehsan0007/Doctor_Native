import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import HeaderComp from '../common/header'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

class PatientList extends Component {
    render() {
        return (
            <Container>
                <HeaderComp header="Patient List" name="arrow-back" press={() => Actions.dashboard()} />
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'http://icons.iconarchive.com/icons/designbolts/free-male-avatars/128/Male-Avatar-Hair-icon.png' }} />
                        </Left>
                        <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                </List>
            </Container>
        )
    }
}
export default PatientList