import React, { Component } from 'react'
import { connect } from 'react-redux';
import PatientSearch from '../../component/Doctor/patientSearch'
import { PatientAction } from '../../store/actions'


const mapStateToProps = ({ patient }) => {

    const { patientname, patientdisease, patientmedication, cost, mobile, genderchange, datechange, loading } = patient;
    return { patientname, patientdisease, patientmedication, cost, mobile, genderchange, datechange, loading };

};

const mapDispatchToProps = (dispatch) => {
    return {
        onpatientNameChange: (val) => dispatch(PatientAction.onpatientNameChange(val)),
    };
};

const PatientSearchContainer = connect(mapStateToProps, mapDispatchToProps)(PatientSearch);

export default PatientSearchContainer;