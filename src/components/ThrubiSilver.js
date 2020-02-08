import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import Transform from "./Transform";
import _MemberSilver from './_MemberSilver';

class _ThrubiSilver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPanel: false,
            manualPanel: false,
        };
    }

    componentWillUpdate() {
        const {member} = this.props;
        if (this.state.showPanel===(!member.thrubiSilver)&&!this.state.manualPanel) this.setState({showPanel: (!!member.thrubiSilver)});
    }

    render() {
        const {busy,userLoggedIn,populationId,member,ccySymbol,exrate,thrubiPriceSilver,thrubiPriceGold,optionViewHistory,optionAdvancedMode} = this.props;

        return(
            <div className="text-center">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.setState({manualPanel: true});
                    this.setState({showPanel: !this.state.showPanel});
                }}>
                    <b>
                        <input id="showPanel"
                               className={"btn btn-sm p-0 btn-block btn-"+((!!member.thrubiSilver)?(this.state.showPanel?"primary":"secondary"):"light")}
                               type="submit"
                               value="Silver Thrubi" />
                    </b>
                </form>
                {
                    !this.state.showPanel ? "" :
                        busy ? "Member loading..." :
                            !userLoggedIn ? "User not logged in" :
                                populationId <0 ? "No population selected" :
                                    <Fragment>
                                        <_MemberSilver
                                            member={member}
                                            ccySymbol={ccySymbol}
                                            exrate={exrate}
                                            thrubiPriceSilver={thrubiPriceSilver}
                                            thrubiPriceGold={thrubiPriceGold}
                                            optionViewHistory={optionViewHistory}
                                            optionAdvancedMode={optionAdvancedMode}
                                        />
                                        <Transform />
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
    thrubiPriceSilver: state.client.population.thrubiPriceSilver,
    thrubiPriceGold: state.client.population.thrubiPriceGold,
    optionViewHistory: state.client.user.optionViewHistory,
    optionAdvancedMode: state.client.user.optionAdvancedMode,
});

const ThrubiSilver = connect(mapStateToProps)(_ThrubiSilver);

export default ThrubiSilver;