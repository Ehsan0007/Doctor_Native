import React, { Component } from 'react';
import { View, ListView, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'
import HeaderComp from '../common/header'

class ListItems extends Component {

    RowPress(value) {
        Actions.patientprofile({text : value})
        // console.log("value",value)
    }
    render() {
        const arr = [];
        const data = this.props.patient;
        Object.keys(data.val).map((key) => {
            let patientData = data.val[key];
            patientData.key = key;
            console.log(patientData)
            arr.push(patientData)
        })
        return (
            <Container>
                <HeaderComp header="Patient List" name="arrow-back" press={() => Actions.dashboard()} />
                <Content>
                    {arr && arr.map((val, index) => {
                        return (
                            <List key={index} onTouchStart={() => this.RowPress(val)}>
                                <ListItem avatar>
                                    <Left>
                                        {val.genderchange == 'Male' ? <Thumbnail source={{ uri: 'https://thumb7.shutterstock.com/display_pic_with_logo/167167554/542759665/stock-vector-man-character-face-avatar-in-glasses-modern-colorful-style-male-portrait-vector-cartoon-542759665.jpg' }} /> : <Thumbnail source={{ uri: 'http://rotarymeansbusiness.com/wp-content/uploads/avatar-female.png' }} />}
                                    </Left>
                                    <Body>
                                        <Text>{val.patientname}</Text>
                                        <Text note>{"Disease : " + val.patientdisease}</Text>
                                        <Text note>{"Mobile : " + val.mobile}</Text>
                                    </Body>
                                    <Right>
                                        <Text note>{val.datechange}</Text>
                                    </Right>
                                </ListItem>
                            </List>

                        )
                    })}
                </Content>
            </Container>
        )
    }
}

export default ListItems