import React, {Component} from "react";
import {connect} from "react-redux";
import _ActionButton from "./_ActionButton";
import {deletePopulation} from "../actions/adminMenu";

class _PopulationDelete extends Component {
    render() {
        return (
            <_ActionButton action={deletePopulation} text="Delete Population" buttonType="btn-secondary" />
        );
    }
}

const mapStateToProps = state => ({
});

const PopulationDelete = connect(mapStateToProps,{deletePopulation})(_PopulationDelete);

export default PopulationDelete;

