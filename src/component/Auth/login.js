import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button, Left, Text } from 'native-base';
import { Image, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux'

class LoginForm extends Component {
    render() {
        return (
            <Container style={styles.backgroundImage}>
                <Image source={require('../../Assets/splash.png')} style={styles.backImage}>
                    <Form style={styles.form}>
                        <Item rounded style={styles.input}>
                            <Icon active name='ios-person' style={styles.icons} />
                            <Input placeholder="Username" />
                        </Item>
                        <Item rounded style={styles.input} transparent>
                            <Icon active name='unlock' style={styles.icons} />
                            <Input placeholder="Password" style={styles.field} />
                        </Item>
                        <Button rounded style={styles.button}>
                            <Text>Login</Text>
                        </Button>
                    </Form>
                    <View style={styles.footer}>
                        <Button style={{ width: '60%', backgroundColor: '#13A679' }} onPress={()=>Actions.signup()} ><Text>Create Account</Text></Button>
                        <Button style={{ width: '40%', backgroundColor: '#13A679' }} ><Text>Need Hlep ?</Text></Button>
                    </View>
                </Image>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null
    },

    backImage: {
        width: 360,
        height: 620
    },
    form: {
        marginTop: 350,
        alignItems: 'center'
    },
    input: {
        width: '92%',
        height: 40,
        marginTop: 10
    },
    field: {
        color: '#fff',
        borderRadius: 50
    },
    icons: {
        color: '#fff'
    },
    button: {
        marginTop: 15,
        width: '90%',
        marginLeft: 20,
        paddingLeft: '40%',
        backgroundColor: '#61C39C'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        marginLeft: 20,
        marginTop: 10
    },
});



export default LoginForm;