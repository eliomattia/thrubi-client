import React, {Component, Fragment} from 'react';
import { connect } from "react-redux";
import _CcyRow from "./_CcyRow";
import { claim } from "../actions/userMenu";

class _Claim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            claimProcedureActive: false,
        };
    }

    render() {
        const {busy,populationId,claimBusy,thrubiBlueEth,ccySymbol,exrate,claim} = this.props;

        return(
            <div className="claimItem">
                {
                    busy ? "Claim loading..." :
                        populationId === -1 ? "Please select a population, first." :
                            claimBusy ? "Busy processing claim" :
                                <Fragment>
                                    {
                                        !this.state.claimProcedureActive ? "" :
                                            <Fragment>
                                                <div className="small text-justify">
                                                    Fees will be deducted to pay for the blockchain transaction.
                                                    The remaining Ξ will be credited in full, values in { ccySymbol } are just an indication.
                                                </div>
                                                <div className="container">
                                                    <_CcyRow text="You can claim"             muted={false} bold={false} value={thrubiBlueEth} ccySymbol="Ξ" />
                                                    <_CcyRow text={"Claimable in "+ccySymbol} muted={false} bold={false} value={(thrubiBlueEth * exrate)} ccySymbol={ccySymbol} />

                                                </div>
                                                <form onSubmit={(event) => {
                                                    event.preventDefault();
                                                    claim();
                                                }}>
                                                    <input className={"btn btn-sm p-0 btn-block btn-"+(thrubiBlueEth?"primary":"light")}
                                                           type="submit"
                                                           disabled={!thrubiBlueEth}
                                                           value={thrubiBlueEth?("Claim your " +thrubiBlueEth.toFixed(2) + " Ξ"):"Nothing to claim"} />
                                                </form>
                                            </Fragment>
                                    }
                                    <form onSubmit={(event) => {
                                        event.preventDefault();
                                        this.setState({claimProcedureActive: !this.state.claimProcedureActive});
                                    }}>
                                        <input id="activateClaimProcedure"
                                               className={"btn btn-sm p-0 btn-block btn-"+(this.state.claimProcedureActive?"secondary":(thrubiBlueEth?"primary":"light"))}
                                               type="submit"
                                               disabled={((!thrubiBlueEth)&&(!this.state.claimProcedureActive))}
                                               value={(this.state.claimProcedureActive?"Close":(thrubiBlueEth?"Activate claim procedure":"Nothing to claim"))} />
                                    </form>
                                </Fragment>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    busy: state.session.busy.component.claim,
    populationId: state.client.population.id,
    claimBusy: state.session.busy.action.claim,
    thrubiBlueEth: state.client.member.thrubiBlueEth,
    ccySymbol: state.client.population.ccySymbol,
    exrate: state.global.market.exrate,
});

const Claim = connect(mapStateToProps,{claim})(_Claim);

export default Claim;