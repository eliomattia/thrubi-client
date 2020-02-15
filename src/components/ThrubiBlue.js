import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import _ActionButton from "./_ActionButton";
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
            <div className="text-center text-primary">
                <_ActionButton text="Thrubi Blue" buttonType={"btn-outline-primary"+(this.state.showPanel?" active":"")} disabled={!!member.thrubiBlue}
                               action={() => { this.setState({manualPanel: true}); this.setState({showPanel: !this.state.showPanel});}} />
                {
                    !this.state.showPanel ? "" :
                        busy ? "Member loading..." :
                            !userLoggedIn ? "User not logged in" :
                                !populationId ? "No population selected" :
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