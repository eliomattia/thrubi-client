import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import _MemberGold from './_MemberGold';

class _ThrubiGold extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPanel: false,
            manualPanel: false,
        };
    }

    componentWillUpdate() {
        const {member} = this.props;
        if (this.state.showPanel===(!member.thrubiGold)&&!this.state.manualPanel) this.setState({showPanel: (!!member.thrubiGold)});
    }

    render() {
        const {busy,userLoggedIn,populationId,member,ccySymbol,exrate,thrubiPriceGold} = this.props;

        return(
            <div className="text-center">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.setState({manualPanel: true});
                    this.setState({showPanel: !this.state.showPanel});
                }}>
                    <b>
                        <input id="showPanel"
                               className={"btn btn-sm p-0 btn-block btn-"+((!!member.thrubiGold)?(this.state.showPanel?"primary":"secondary"):"light")}
                               type="submit"
                               value="Gold Thrubi" />
                    </b>
                </form>
                {
                    !this.state.showPanel ? "" :
                        busy ? "Member loading..." :
                            !userLoggedIn ? "User not logged in" :
                                populationId <0 ? "No population selected" :
                                    <Fragment>
                                        <_MemberGold
                                            member={member}
                                            ccySymbol={ccySymbol}
                                            exrate={exrate}
                                            thrubiPriceGold={thrubiPriceGold}
                                        />
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
    thrubiPriceGold: state.client.population.thrubiPriceGold,
});

const ThrubiGold = connect(mapStateToProps)(_ThrubiGold);

export default ThrubiGold;