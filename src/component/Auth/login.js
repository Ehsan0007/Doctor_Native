import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button, Left } from 'native-base';
import { Image, StyleSheet, View } from 'react-native'

class LoginForm extends Component {
    render() {
        return (
            <Container style={styles.backgroundImage}>
                    <Image source={require('../../Assets/splash.png')} style={styles.backImage}>
               
                    <Item>
                        <Input placeholder="Username" />
                    </Item>
                    <Item last>
                        <Input placeholder="Password" />
                    </Item>
                    </Image>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        // resizeMode: 'cover'
    },
    //  image : {
    //      justifyContent : 'center'
    //  },
    backImage: {
        width: 360,
        height: 620
    }
});



export default LoginForm;