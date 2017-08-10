import React, { Component } from 'react';
import { View, ListView, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'
import HeaderComp from '../common/header'

class ListItems extends Component {

    RowPress(value) {
        Actions.patientprofile({data : this.props.patient})
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

                            <List key={index} onTouchStart={(val) => this.RowPress(val)}>
                                <ListItem avatar>
                                    <Left>
                                        {val.genderchange == 'Male' ? <Thumbnail source={{ uri: 'https://thumbs.dreamstime.com/z/profile-icon-male-avatar-man-hipster-style-fashion-cartoon-guy-beard-glasses-portrait-casual-person-silhouette-face-flat-design-78605483.jpg' }} /> : <Thumbnail source={{ uri: 'http://rotarymeansbusiness.com/wp-content/uploads/avatar-female.png' }} />}
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