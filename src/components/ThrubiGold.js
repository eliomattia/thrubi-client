import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import _MemberGold from "./_MemberGold";
import _ActionButton from "./_ActionButton";

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
        const {busy,member,ccySymbol,exrate,thrubiPriceGold} = this.props;

        return(
            <div className="text-center text-success">
                <_ActionButton text="Thrubi Gold" buttonType={"btn-outline-success"+(this.state.showPanel?" active":"")}
                               action={() => { this.setState({manualPanel: true}); this.setState({showPanel: !this.state.showPanel});}} />
                {
                    !this.state.showPanel ? "" :
                        busy ? "Member loading..." :
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

const mapStateToProps = state => ({
    busy: state.session.busy.component.dashboard,
    member: state.client.member,
    ccySymbol: state.client.population.ccySymbol,
    exrate: state.global.market.exrate,
    thrubiPriceGold: state.client.population.thrubiPriceGold,
});

const ThrubiGold = connect(mapStateToProps)(_ThrubiGold);

export default ThrubiGold;