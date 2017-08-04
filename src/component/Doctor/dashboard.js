import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button, Left, Text, Footer, Thumbnail, FooterTab, Badge } from 'native-base';
import { Image, DrawerLayoutAndroid, View, TouchableHighlight, ScrollView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import HeaderComp from '../common/header'

class Dashboard extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Dashboard</Title>
                    </Body>
                </Header>
                <Image source={require('../../Assets/mobile.jpg')} style={styles.pic} />
                <View style={styles.view}>
                    <CardItem style={styles.cardParent}>
                        <CardItem style={styles.card1}>
                            <Image source={require('../../Assets/user_add.png')} style={styles.image} />
                            <Text>Ehsan</Text>
                        </CardItem>

                    </CardItem>
                    <CardItem style={styles.cardParent1}>
                        <CardItem style={styles.card1}>

                        </CardItem>
                    </CardItem>
                    <CardItem style={styles.cardParent2}>
                        <CardItem style={styles.card1}>

                        </CardItem>
                    </CardItem>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#A8C29B'
    },
    container: {
        backgroundColor: '#A8C29B'
    },
    pic: {
        width: '100%',
        height: 280
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20
    },
    card1: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    cardParent: {
        flex: 0,
        width: 100,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        // borderTop : 'none'
        borderTopRightRadius: 50,
        borderColor: '#4D585C',
        backgroundColor: '#2C3286',
    },
    cardParent1: {
        flex: 0,
        width: 100,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        // borderTop : 'none',
        marginLeft: 10,
        borderTopRightRadius: 50,
        backgroundColor: '#2C3286',
    },
    cardParent2: {
        flex: 0,
        width: 100,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        // borderTop : 'none'
        marginLeft: 10,
        borderTopRightRadius: 50,
        backgroundColor: '#2C3286',
    },
    image: {
        width: 50,
        height: 50
    }
})

export default Dashboard;