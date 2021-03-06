import React, {Component,Fragment} from "react";
import {connect} from "react-redux";
import Populations from "./Populations";
import {fetchPopulations} from "../actions/population";
import _ActionButton from "./_ActionButton";
import {createMember} from "../actions/member";
import {changeFilter} from "../actions/population";

class _PopulationSelect extends Component {
    componentDidMount() {
        this.reload();
    };

    componentDidUpdate() {
        this.reload();
    };

    reload() {
        const {refList} = this.props;
        const {userId,populationsBusy,populationsNotAvailable} = this.props;
        const {fetchPopulations} = this.props;
        if ((!populationsBusy)&&(populationsNotAvailable)) fetchPopulations(userId,refList);
    }

    render() {
        const {busy,populationsBusy,populationsNotAvailable,populationId,refList} = this.props;
        const {createMember,changeFilter} = this.props;
        let countryFilterXs,countryFilterLg;

        return (
            busy ? "Loading..." :
                populationsBusy ? "User populations loading..." :
                    populationsNotAvailable ? "No populations found..." :
                        <Fragment>
                            <div className="d-none d-lg-flex flex-column flex-grow-1 align-items-center wMin800">
                                <div className="m-3 d-flex flex-column flex-grow-1 align-items-center wMin800">
                                    <div className="d-flex flex-column flex-grow-1 wMin800 bg-light">
                                        <div className="text-center bg-primary text-light p-2">Please select your country and currency from the list below and confirm:</div>
                                        <input ref={input => countryFilterLg = input}
                                               onChange={() => changeFilter(countryFilterLg.value)}
                                               type="text" className="form-control form-control-sm rounded-0 my-3 p-3"
                                               placeholder="Search by country or currency"/>
                                        <Populations />
                                        {
                                            refList ? "" :
                                                <_ActionButton action={createMember} payload={populationId} disabled={!populationId} text="Confirm" noMargin="p-2" buttonType=" btn-primary" />
                                        }
                                    </div>
                                    <a className="nav-link text-primary text-center" href="mailto:info@thrubi.com">Not found? Let us know: info@thrubi.com</a>
                                </div>
                            </div>
                            <div className="d-flex d-lg-none flex-column flex-grow-1 align-items-center">
                                <div className="m-3 d-flex flex-column flex-grow-1 align-items-center">
                                    <div className="d-flex flex-column flex-grow-1 bg-light">
                                        <div className="text-center bg-primary text-light p-2">Please select your country and currency from the list below and confirm:</div>
                                        <input ref={input => countryFilterXs = input}
                                               onChange={() => changeFilter(countryFilterXs.value)}
                                               type="text" className="form-control form-control-sm rounded-0 my-3 p-3"
                                               placeholder="Search by country or currency"/>
                                        <Populations />
                                        {
                                            refList ? "" :
                                                <_ActionButton action={createMember} payload={populationId} disabled={!populationId} text="Confirm" noMargin="p-2" buttonType=" btn-primary" />
                                        }
                                    </div>
                                    <a className="nav-link text-primary text-center" href="mailto:info@thrubi.com">Not found? Let us know: info@thrubi.com</a>
                                </div>
                            </div>
                        </Fragment>
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

const PopulationSelect = connect(mapStateToProps,{fetchPopulations,createMember,changeFilter})(_PopulationSelect);

export default PopulationSelect;