import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button, Left, Text } from 'native-base';
import { Image, StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { AuthActions } from '../../store/actions'
import { connect } from 'react-redux';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    onEmailChange(text) {
        this.setState({ username: text })
        // this.props.emailChange(text)
        console.log(this.state.username)
    }
    onPasswordChange(text) {
        this.setState({ password: text })
        // this.props.passwordChange(text)
        console.log(this.state.password)
    }

    onButtonPress() {
        const { email, password } = this.props;
        // console.log("this.prop", this.props);
        // this.props.signupUser({ email, password });
        const obj = {
            user : this.state.username,
            pass : this.state.password
        }
        

    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" color='purple' style={styles.spinnerStyle} />
        }
        return (
            <Button rounded style={styles.button} onPress={() => this.onButtonPress()}>
                <Text>Register</Text>
            </Button>
        );

    }
    render() {
        return (
            <Container style={styles.backgroundImage}>
                <Image source={require('../../Assets/splash.png')} style={styles.backImage}>
                    <Form style={styles.form}>
                        {/*<Item rounded style={styles.input}>
                            <Icon active name='ios-person' style={styles.icons} />
                            <Input placeholder="First Name"
                                onChangeText={this.firstChange.bind(this)}
                            />
                        </Item>
                        <Item rounded style={styles.input}>
                            <Icon active name='ios-person' style={styles.icons} />
                            <Input placeholder="Last Name"
                                onChangeText={this.lastChange.bind(this)}
                            />
                        </Item>*/}
                        <Item rounded style={styles.input}>
                            <Icon active name='ios-person' style={styles.icons} />
                            <Input placeholder="Username"
                                onChangeText={(val) => this.onEmailChange(val)}
                            />
                        </Item>
                        <Item rounded style={styles.input} transparent>
                            <Icon active name='unlock' style={styles.icons} />
                            <Input placeholder="Password"
                                style={styles.field}
                                secureTextEntry
                                onChangeText={(val) => this.onPasswordChange(val)}
                            />
                        </Item>

                        {this.renderButton()}

                        <Button rounded style={styles.button1} onPress={() => Actions.login()}>
                            <Text>Back</Text>
                        </Button>
                    </Form>
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
        marginTop: 270,
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
        paddingLeft: '35%',
        backgroundColor: '#61C39C'
    },
    button1: {
        marginTop: 15,
        width: '30%',
        marginLeft: '35%',
        paddingLeft: '10%',
        backgroundColor: '#13A679'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        marginLeft: 20,
        marginTop: 10
    },
});

const mapStateToProps = ({ auth }) => {
    const { email, password, loading, error } = auth;

    return { email, password, loading, error };

};

const mapDispatchToProps = (dispatch) => {
    return {
        emailChange: (text) => dispatch(AuthActions.emailChanged(text)),
        passwordChange: (text) => dispatch(AuthActions.passwordChanged(text)),
        signupUser: (userData) => dispatch(AuthActions.signupUser(userData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);