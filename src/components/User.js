import React,{Component,Fragment} from "react";
import {connect} from "react-redux";
import MemberBar from "./MemberBar";
import Auth from "./Auth";
import GuestFaq from "./GuestFaq";
import UserView from "./UserView";
import UserActivation from "./UserActivation";
import UserManageDetails from "./UserManageDetails";
import UserIdentity from "./UserIdentity";
import ThrubiBlue from "./ThrubiBlue";
import ThrubiSilver from "./ThrubiSilver";
import ThrubiGold from "./ThrubiGold";
import PopulationSelect from "./PopulationSelect";
import PopulationAdd from "./PopulationAdd";
import _ActionButton from "./_ActionButton";
import PopulationDelete from "./PopulationDelete";
import PopulationTune from "./PopulationTune"
import {close} from "../actions/user";
import "./styles/User.scss";
import GuestMenu from "./GuestMenu";
import {guestMenuOption} from "../config/guest";
import GuestInfographics from "./GuestInfographics";
import UserActivationChecklist from "./UserActivationChecklist";

class _User extends Component {
    render() {
        const {busy,optionUserMenu,loggedIn,auth,identityCertified,isMember,member,guestOption} = this.props;
        const {close} = this.props;

        return(
            <div className="container-fluid row p-0 m-0 mb-5">
                {
                    busy ? "User loading..." :
                        <Fragment>
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
                            <div className="col-lg-9 navbar-light p-0">
                                {
                                    !loggedIn ?
                                        <div className="">
                                            <GuestMenu />
                                            { guestOption!==guestMenuOption.FAQ ? "" : <GuestFaq /> }
                                            { guestOption!==guestMenuOption.INFOGRAPHICS ? "" : <GuestInfographics /> }
                                        </div>
                                        :
                                        <div>
                                            <div className="container row">
                                                <div className="col-lg-2" />
                                                <div className="col-lg-8">
                                                    <UserActivationChecklist />
                                                </div>
                                                <div className="col-lg-2" />
                                            </div>
                                            {
                                                !isMember?
                                                    <Fragment>
                                                        <PopulationSelect refList={false} />
                                                        {!auth?"":<PopulationAdd />}
                                                    </Fragment>
                                                    :
                                                    <div className="bg-light mr-2 ml-2 ml-lg-0">
                                                        <MemberBar/>
                                                        {
                                                            identityCertified<=0?
                                                                <div>
                                                                    <UserIdentity />
                                                                </div>
                                                                :
                                                                <Fragment>
                                                                    {
                                                                        !auth?
                                                                            <Fragment>
                                                                                <div
                                                                                    className="container-fluid row p-0 m-0">
                                                                                    <div
                                                                                        className="col-lg-4 thrubiBlue navbar-light">
                                                                                        {(member.thrubiBlue||member.thrubiBlueNext||member.thrubiBlueEth
                                                                                            ||member.thrubiBlueAward||member.thrubiBlueAwardTotal||member.thrubiBlueClaimTotal)
                                                                                            ?<ThrubiBlue />:""}
                                                                                    </div>
                                                                                    <div
                                                                                        className="col-lg-4 thrubiSilver navbar-light">
                                                                                        {(member.thrubiSilver||member.thrubiSilverNext||member.thrubiSilverEth
                                                                                            ||member.thrubiSilverTransformTotal)
                                                                                            ?<ThrubiSilver />:""}
                                                                                    </div>
                                                                                    <div
                                                                                        className="col-lg-4 thrubiGold navbar-light">
                                                                                        {(member.thrubiGold)
                                                                                            ?<ThrubiGold />:""}
                                                                                    </div>
                                                                                </div>
                                                                            </Fragment>
                                                                            :
                                                                            <Fragment>
                                                                                <div className="col-lg-4 navbar-light">
                                                                                    <PopulationDelete />
                                                                                </div>
                                                                                <div className="col-lg-4 navbar-light">
                                                                                    <PopulationTune />
                                                                                </div>
                                                                            </Fragment>
                                                                    }
                                                                </Fragment>
                                                        }
                                                    </div>
                                            }
                                        </div>
                                }
                            </div>
                        </Fragment>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    busy:               state.session.busy.component.user,
    optionUserMenu:     state.client.user.optionUserMenu,
    role:               state.client.user.role,
    loggedIn:           state.client.userAccess.loggedIn,
    populationId:       state.client.population.id,
    isMember:           state.client.member.isMember,
    member:             state.client.member,
    identityCertified:  state.client.user.identityCertified,
    guestOption:        state.client.guest.guestMenuOption,
});

const User = connect(mapStateToProps,{close})(_User);

export default User;