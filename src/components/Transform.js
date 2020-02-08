import React, {Component, Fragment} from 'react';
import { connect } from "react-redux";
import _CcyRow from "./_CcyRow";
import {transform} from "../actions/blockchain_ethereum";

class _Transform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transformEthValue: 0,
            transformProcedureActive: false,
        };
    }

    render() {
        const {busy,transformBusy,populationId,exrate,ccySymbol,thrubiSilver,thrubiPriceSilver,thrubiFees,transform} = this.props;

        return(
            <div>
                {
                    busy ? "Transform loading..." :
                        populationId===-1 ? "Please select a population, first." :
                            transformBusy ? "Busy processing transform request" :
                                <Fragment>
                                    {
                                        !this.state.transformProcedureActive ? "" :
                                            <Fragment>
                                                <div className="small text-justify">
                                                    Blockchain transaction costs will be paid by you upon submitting the transaction.
                                                    Final transformed $₮ will depend upon Ξ exchange rates and $₮ price when your transaction is accepted.
                                                    Any excess Ξ that you transform will be credited on the account and used whenever $₮ becomes available.
                                                </div>
                                                <div className="container">
                                                    <_CcyRow text="Your Ξ balance"
                                                             muted={false} bold={false}
                                                             value={0 /* add a worker that constantly checks Ξ balance from blockchain for account */ }
                                                             ccySymbol="Ξ" />
                                                    <_CcyRow text="Ξ to spend to transform"
                                                             muted={false} bold={false}
                                                             value={this.state.transformEthValue}
                                                             ccySymbol="Ξ" />
                                                    <_CcyRow text={"Current value in "+ccySymbol}
                                                             muted={false} bold={false}
                                                             value={(this.state.transformEthValue * exrate)}
                                                             ccySymbol={ccySymbol} />
                                                    <_CcyRow text={"Thrubi fees ("+(thrubiFees * 100).toFixed(1)+"%)"}
                                                             muted={false} bold={false}
                                                             value={((this.state.transformEthValue * exrate) * thrubiFees)}
                                                             ccySymbol={ccySymbol} />
                                                    <_CcyRow text="You can transform"
                                                             muted={false} bold={false}
                                                             value={((this.state.transformEthValue * exrate) * (1-thrubiFees) / thrubiPriceSilver)}
                                                             ccySymbol="$₮" />
                                                </div>
                                                <form onSubmit={async (event) => {
                                                    event.preventDefault();
                                                    transform(this.state.transformEthValue);
                                                }}>
                                                    <input id="transformEth" ref={(input) => this.transformEthRef = input} type="text" className="form-control form-control-sm"
                                                           placeholder={this.transformEthValue} required
                                                           onChange={(action) => {
                                                               action.preventDefault();
                                                               let newValue = parseFloat(this.transformEthRef.value);
                                                               if (!newValue) newValue=0;
                                                               this.setState({transformEthValue: newValue});
                                                           }}/>
                                                    <input className={"btn btn-sm p-0 btn-block btn-"+(this.state.transformEthValue?"primary":"light")}
                                                           type="submit"
                                                           disabled={!this.state.transformEthValue}
                                                           value={this.state.transformEthValue?"Transform "+this.state.transformEthValue.toFixed(2)+" Ξ":"Insert an Ξ amount"} />
                                                </form>
                                            </Fragment>
                                    }
                                    <form onSubmit={(event) => {
                                        event.preventDefault();
                                        this.setState({transformProcedureActive: !this.state.transformProcedureActive});
                                    }}>
                                        <input id="activateTransformProcedure"
                                               className={"btn btn-sm p-0 btn-block btn-"+(this.state.transformProcedureActive?"secondary":(thrubiSilver?"primary":"light"))}
                                               type="submit"
                                               disabled={((!thrubiSilver)&&(!this.state.transformProcedureActive))}
                                               value={(this.state.transformProcedureActive?"Close":(thrubiSilver?"Activate transform procedure":"Nothing to transform"))} />
                                    </form>
                                </Fragment>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    busy: state.session.busy.component.transform,
    transformBusy: state.session.busy.action.transform,
    populationId: state.client.population.id,
    thrubiSilver: state.client.member.thrubiSilver,
    thrubiPriceSilver: state.client.population.thrubiPriceSilver,
    thrubiFees: state.client.population.thrubiFees,
    ccySymbol: state.client.population.ccySymbol,
    exrate: state.global.market.exrate,
});

const Transform = connect(mapStateToProps,{transform})(_Transform);

export default Transform;