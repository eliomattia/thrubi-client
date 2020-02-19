import React, {Component} from "react";
import {connect} from "react-redux";
import {selectPopulation,deselectPopulation} from "../actions/population";

class _Populations extends Component {
    render() {
        const {populations,populationId,countryFilter} = this.props;
        const {selectPopulation,deselectPopulation} = this.props;

        return (
            populations
                .filter(p => (
                    !countryFilter
                    || p.countryId.toLowerCase().includes(countryFilter.toLowerCase())
                    || p.countryName.toLowerCase().includes(countryFilter.toLowerCase())
                ))
                .map((population,index) => {
                return (
                    <div key={index} className="bg-light p-0 my-2">
                        <button
                            className={"btn btn-sm m-0 p-0 rounded-0 border-0 btn-block btn-outline-primary"+
                                ((populationId===population.populationId)?" active":"")}
                            onClick={(populationId===population.populationId) ? (() => deselectPopulation(population)) : (() => selectPopulation(population))}
                        >
                            <div className="d-none d-lg-flex container-fluid row p-3 m-0">
                                <div className="col-lg-1 col-md-2  p-0 m-0 text-center">{population.countryId}</div>
                                <div className="col-lg-5 col-md-10 p-0 m-0 text-left"> {population.countryName}</div>
                                <div className="col-lg-1 col-md-2  p-0 m-0 text-center">{population.ccyId}</div>
                                <div className="col-lg-4 col-md-8  p-0 m-0 text-left">{population.ccyName}</div>
                                <div className="col-lg-1 col-md-2  p-0 m-0 text-center">{population.ccySymbol}</div>
                            </div>
                            <div className="d-block d-lg-none my-3 py-3 text-center">
                                {population.countryName} ({population.countryId}) - {population.ccyName} ({population.ccyId} {population.ccySymbol})
                            </div>
                        </button>
                    </div>
                )
            })
        );
    }
}

const mapStateToProps = state => ({
    deactivated:        state.client.user.deactivated,
    populationId:       state.client.population.id,
    populations:        state.client.population.populations,
    countryFilter:      state.client.population.countryFilter,
});

const Populations = connect(mapStateToProps,{selectPopulation,deselectPopulation})(_Populations);

export default Populations;