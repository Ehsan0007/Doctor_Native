import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button, Left, Text } from 'native-base';
import { Image, DrawerLayoutAndroid, View, TouchableHighlight, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';


class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => alert("Ehsan")}>
                            <Icon name='menu' style={styles.icon} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.text}>Patient Tracking</Title>
                    </Body>
                </Header>
            </Container>
        )
    }
}

export default Dashboard;