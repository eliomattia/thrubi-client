import React, { Component } from "react";
import {connect} from "react-redux";
import Populations from "./Populations";
import {fetchPopulations} from "../actions/userMenu";

class _SelectPopulation extends Component {
    componentDidMount() {
        this.reload();
    };

    componentDidUpdate() {
        this.reload();
    };

    reload() {
        const {userId,populationsBusy} = this.props;
        const {fetchPopulations} = this.props;
        if (!populationsBusy) fetchPopulations(userId);
    }

    render() {
        const {busy,populationsBusy,deactivated,populationsNotAvailable} = this.props;

        return (
            <div className="populationTable">
                {
                    busy ? <div className="text-center">Loading...</div> :
                        deactivated ? "User deactivated, please activate user to select population" :
                            populationsBusy ? <div>User populations loading...</div> :
                                populationsNotAvailable ? "No populations found, we are working on this..."
                                    :
                                    <Populations />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    busy:                       state.session.busy.component.userMenu,
    userId:                     state.client.user.id,
    deactivated:                state.client.user.deactivated,
    populationsBusy:            state.session.busy.action.populations,
    populationsNotAvailable:    (!state.client.population.populations || !state.client.population.populations.length),
});

const SelectPopulation = connect(mapStateToProps,{fetchPopulations})(_SelectPopulation);

export default SelectPopulation;