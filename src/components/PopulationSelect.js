import React, {Component,Fragment} from "react";
import {connect} from "react-redux";
import Populations from "./Populations";
import {fetchPopulations} from "../actions/population";
import _ActionButton from "./_ActionButton";
import {createMember} from "../actions/member";

class _PopulationSelect extends Component {
    componentDidMount() {
        this.reload();
    };

    componentDidUpdate() {
        this.reload();
    };

    reload() {
        const {userId,populationsBusy,populationsNotAvailable} = this.props;
        const {fetchPopulations} = this.props;
        if ((!populationsBusy)&&(populationsNotAvailable)) fetchPopulations(userId);
    }

    render() {
        const {busy,populationsBusy,populationsNotAvailable,populationId} = this.props;
        const {createMember} = this.props;

        return (
            <div className="populationTable">
                {
                    busy ? <div className="text-center">Loading...</div> :
                        populationsBusy ? <div>User populations loading...</div> :
                            populationsNotAvailable ? "No populations found, we are working on this..."
                                :
                                <Fragment>
                                    <div className="my-3">Please select your country and currency from the list below and confirm:</div>
                                    <Populations />
                                    <_ActionButton action={createMember} payload={populationId} disabled={!populationId} text="Confirm" buttonType="btn-primary" />
                                </Fragment>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    busy:                       state.session.busy.component.userMenu,
    populationsBusy:            state.session.busy.action.populations,
    populationsNotAvailable:    (!state.client.population.populations || !state.client.population.populations.length),
    userId:                     state.client.user.id,
    populationId:               state.client.population.id,
});

const PopulationSelect = connect(mapStateToProps,{fetchPopulations,createMember})(_PopulationSelect);

export default PopulationSelect;