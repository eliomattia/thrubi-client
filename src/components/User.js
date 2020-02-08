import React, { Component,Fragment } from "react";
import { connect } from "react-redux";
import MemberBar from "./MemberBar";
import Auth from "./Auth";
import Info from "./Info";
import UserView from "./UserView";
import UserActivation from "./UserActivation";
import UserManageDetails from "./UserManageDetails";
import DeclareIncome from "./DeclareIncome";
import ThrubiBlue from "./ThrubiBlue";
import ThrubiSilver from "./ThrubiSilver";
import ThrubiGold from "./ThrubiGold";
import SelectPopulation from "./SelectPopulation";
import AddPopulation from "./AddPopulation";
import _ActionButton from "./_ActionButton";
import _DeletePopulation from "./_DeletePopulation";
import TunePopulation from "./TunePopulation"
import {close} from "../actions/user";
import {deletePopulation} from "../actions/adminMenu";
import "./styles/User.scss";

class _User extends Component {
    render() {
        const {busy,optionUserMenu,loggedIn,auth,populationId} = this.props;
        const {deletePopulation,close} = this.props;

        return(
            <div className="container-fluid">
                {
                    busy ? "User loading..." :
                        <div className="row">
                            <div className="col-lg-3 navbar-light">
                                {loggedIn ? <UserView /> : ""}
                                <Auth />
                                {loggedIn && optionUserMenu==="USER" ?
                                    <div>
                                        <UserManageDetails />
                                        <UserActivation />
                                        <_ActionButton text="Close my account" action={close} buttonType="btn-outline-red" />
                                    </div>
                                    : ""}
                            </div>
                            <div className="col-lg-9 navbar-light">
                                {
                                    !loggedIn ?
                                        <Info />
                                        :
                                        populationId===-1 ?
                                            <Fragment>
                                                <SelectPopulation />
                                                {
                                                    auth!==1 ? "" : <AddPopulation />
                                                }
                                            </Fragment>
                                        :
                                            <Fragment>
                                                <MemberBar />
                                                {
                                                    auth!==1 ?
                                                        <Fragment>
                                                            <DeclareIncome />
                                                            <div className="container-fluid">
                                                                <div className="row p-0 userContent">
                                                                    <div className="col-lg-4 thrubiBlue navbar-light">
                                                                        <ThrubiBlue />
                                                                    </div>
                                                                    <div className="col-lg-4 thrubiSilver navbar-light">
                                                                        <ThrubiSilver />
                                                                    </div>
                                                                    <div className="col-lg-4 thrubiGold navbar-light">
                                                                        <ThrubiGold />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Fragment>
                                                        :
                                                        <Fragment>
                                                            <div className="col-lg-4 userPanel navbar-light">
                                                                <_DeletePopulation action={deletePopulation} text="Delete Population" buttonType="btn btn-sm p-0 btn-block btn-secondary"/>
                                                            </div>
                                                            <div className="col-lg-4 userPanel navbar-light">
                                                                <TunePopulation />
                                                            </div>
                                                        </Fragment>
                                                }
                                            </Fragment>
                                }
                            </div>
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    busy:               state.session.busy.component.user,
    optionUserMenu:     state.client.user.optionUserMenu,
    role:               state.client.user.role,
    loggedIn:           state.client.userAccess.loggedIn,
    populationId:       state.client.population.id,
});

const User = connect(mapStateToProps,{deletePopulation,close})(_User);

export default User;