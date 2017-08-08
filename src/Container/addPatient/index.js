import React, { Component } from 'react'
import { connect } from 'react-redux';
import PatientAdd from '../../component/Doctor/patientAdd'
import { PatientAction } from '../../store/actions'

class AddPatients extends Component {
    constructor() {
        super();
        this.state = {
            // date: ""
        }
    }
    patientadd(val) {
        this.props.onpatientNameChange(val)
    }
    patientdisease(val) {
        this.props.onpatientdiseaseChange(val)
    }

    patientmedication(val) {
        this.props.onpatientMedChange(val)
    }
    cost(val) {
        this.props.oncostChange(val)
    }
    // date(val){
    //     this.setState({data : val})
    // }

    onButtonPress() {

        const { patientname, patientdisease, patientmedication, cost } = this.props;
        
        if (this.props.patientname && this.props.patientdisease && this.props.patientdisease && this.props.cost) {
            this.props.addPatient({ patientname, patientdisease, patientmedication, cost })
            alert("Success Insert")
        } else {
            alert("Insert Unfill Data")
        }
    }

    render() {
        return (
            <PatientAdd onPress={() => this.onButtonPress()} patientName={this.patientadd.bind(this)} patientDisease={this.patientdisease.bind(this)} patientMedication={this.patientmedication.bind(this)} cost={this.cost.bind(this)} />
        )
    }
}

const mapStateToProps = ({ patient }) => {

    const { patientname, patientdisease, patientmedication, cost, loading, } = patient;

    return { patientname, patientdisease, patientmedication, cost, loading };
    debugger
};

const mapDispatchToProps = (dispatch) => {
    return {
        onpatientNameChange: (val) => dispatch(PatientAction.onpatientNameChange(val)),
        onpatientdiseaseChange: (val) => dispatch(PatientAction.onpatientdiseaseChange(val)),
        onpatientMedChange: (val) => dispatch(PatientAction.onpatientMedChange(val)),
        oncostChange: (val) => dispatch(PatientAction.oncostChange(val)),
        addPatient: (userData) => dispatch(PatientAction.addPatient(userData))
    };
};

const AddPatientContainer = connect(mapStateToProps, mapDispatchToProps)(AddPatients);

export default AddPatientContainer;