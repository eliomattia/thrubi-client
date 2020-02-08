import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import Claim from "./Claim";
import _MemberBlue from './_MemberBlue';

class _ThrubiBlue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPanel: false,
            manualPanel: false,
        };
    }

    componentWillUpdate() {
        const {member} = this.props;
        if (this.state.showPanel===(!member.thrubiBlue)&&!this.state.manualPanel) this.setState({showPanel: (!!member.thrubiBlue)});
    }

    render() {
        const {busy,userLoggedIn,populationId,member,ccySymbol,exrate,optionViewHistory,optionAdvancedMode} = this.props;

        return(
            <div className="text-center">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.setState({manualPanel: true});
                    this.setState({showPanel: !this.state.showPanel});
                }}>
                    <b>
                        <input id="showPanel"
                               className={"btn btn-sm p-0 btn-block btn-"+((!!member.thrubiBlue)?(this.state.showPanel?"primary":"secondary"):"light")}
                               type="submit"
                               value="Blue Thrubi" />
                    </b>
                </form>
                {
                    !this.state.showPanel ? "" :
                        busy ? "Member loading..." :
                            !userLoggedIn ? "User not logged in" :
                                populationId <0 ? "No population selected" :
                                    <Fragment>
                                        <_MemberBlue
                                            member={member}
                                            ccySymbol={ccySymbol}
                                            exrate={exrate}
                                            optionViewHistory={optionViewHistory}
                                            optionAdvancedMode={optionAdvancedMode}
                                        />
                                        <Claim />
                                    </Fragment>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    busy: state.session.busy.component.dashboard,
    userLoggedIn: state.client.userAccess.loggedIn,
    populationId: state.client.population.id,
    member: state.client.member,
    ccySymbol: state.client.population.ccySymbol,
    exrate: state.global.market.exrate,
    optionViewHistory: state.client.user.optionViewHistory,
    optionAdvancedMode: state.client.user.optionAdvancedMode,
});

const ThrubiBlue = connect(mapStateToProps)(_ThrubiBlue);

export default ThrubiBlue;