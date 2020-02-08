import React from "react";
import {connect} from "react-redux";
import {createMember,selectPopulation} from "../actions/userMenu";

const _Populations = ({populations,auth,populationId,lastPopulationId,selectPopulation,createMember}) => {
    return (
        populations.map((population,index) => {
            return (
                <div key={index} className="population p-0 m-0">
                    <button
                        className={"btn btn-sm p-0 rounded-0 border-0 btn-block btn-outline-"+
                            ((!population.isMember&&!auth)?"secondary":"primary")+
                            ((lastPopulationId===population.populationId)?" active":"")}
                        value={(population.isMember||auth)?"Select":"Become member"}
                        onClick={(population.isMember||auth)
                            ? ((event) => {selectPopulation(population);})
                            : ((event) => {createMember(population);})
                        }
                    >
                        <div className="container-fluid row p-0 m-0">
                            <div className="small col-lg-2 p-0 m-0 text-center">
                                {(!population.isMember&&!auth)?"Become member":
                                (lastPopulationId===population.populationId)?"Last selected: #"+population.populationId:"Select #"+population.populationId}
                            </div>
                            <div className="small col-lg-1 p-0 m-0 text-center">{population.countryId}</div>
                            <div className="small col-lg-3 p-0 m-0 text-left">{population.countryName}</div>
                            <div className="small col-lg-1 p-0 m-0 text-center">{population.ccyId}</div>
                            <div className="small col-lg-4 p-0 m-0 text-left">{population.ccyName}</div>
                            <div className="small col-lg-1 p-0 m-0 text-center">{population.ccySymbol}</div>
                        </div>
                    </button>
                </div>
            )
        })
    );
};

const mapStateToProps = (state) => ({
    auth:               state.client.user.auth,
    deactivated:        state.client.user.deactivated,
    populationId:       state.client.population.id,
    lastPopulationId:   state.client.population.lastId,
    populations:        state.client.population.populations,
});

const Populations = connect(mapStateToProps,{selectPopulation,createMember})(_Populations);

export default Populations;