import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, CardItem, Item, Input, Label } from 'native-base';
import { StyleSheet, Picker, DatePickerAndroid } from 'react-native'
import { Actions } from 'react-native-router-flux'
import HeaderComp from '../common/header'
import DatePicker from 'react-native-datepicker'


class PatientAdd extends Component {
    constructor() {
        super();
        this.state = {
            date: ''
        }
    }
    renderButton() {
        if(this.props.loading){
            return <Spinner size="large" />
        }
        return (
            <Button full style={{ flex: 1, flexDirection: 'row' }}>
                <Text onPress={this.props.onPress}>Add Patient</Text>
            </Button>
        )
    }
    render() {
        return (
            <Container>
                <HeaderComp header="Patient Add" name="arrow-back" press={() => Actions.dashboard()} />
                <CardItem>
                    <Item success floatingLabel >
                        <Label>Patient name</Label>
                        <Icon name="person-add"></Icon>
                        <Input
                            onChangeText={this.props.patientName}
                        />
                    </Item>
                </CardItem>
                <CardItem>
                    <Item success floatingLabel >
                        <Label>Patient Disease</Label>
                        <Icon name="person-add"></Icon>
                        <Input
                            onChangeText={this.props.patientDisease}
                        />
                    </Item>
                </CardItem>
                <CardItem>
                    <Item success floatingLabel >
                        <Label>Patient Medication</Label>
                        <Icon name="person-add"></Icon>
                        <Input
                            onChangeText={this.props.patientMedication}
                        />
                    </Item>
                </CardItem>
                <CardItem>
                    <Item success floatingLabel >
                        <Label>Cost</Label>
                        <Icon name="person-add"></Icon>
                        <Input
                            onChangeText={this.props.cost}
                        />
                    </Item>
                </CardItem>
                {/*<CardItem>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={this.props.date}
                    />
                </CardItem>*/}
                <CardItem>
                    {this.renderButton()}
                </CardItem>

            </Container>
        )
    }
}
const styles = StyleSheet.create({
    label: {
        paddingLeft: 5
    }
})

export default PatientAdd;