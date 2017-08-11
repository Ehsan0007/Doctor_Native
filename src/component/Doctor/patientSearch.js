import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Item, Input, Footer, FooterTab, Card, CardItem } from 'native-base';
import HeaderComp from '../common/header'
import { Actions } from 'react-native-router-flux'

class PatientSearch extends Component {
    onChange(value) {

    }
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onChangeText={(value) => this.onChange(value)} />
                        <Icon name="ios-people" />
                    </Item>
                </Header>
                <Footer style={{marginTop: 500}}>
                    <FooterTab>
                    <Button onPress={()=>Actions.dashboard()}><Text>Back</Text></Button>
                </FooterTab>
                </Footer>

            </Container >
        )
    }
}


export default PatientSearch;