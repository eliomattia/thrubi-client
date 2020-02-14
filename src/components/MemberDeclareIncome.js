import React,{Component,Fragment} from "react";
import {connect} from "react-redux";
import _CcyRow from "./_CcyRow";
import _ActionButton from "./_ActionButton";
import {declareIncome} from "../actions/user";

class _MemberDeclareIncome extends Component {
    render() {
        const {mCurrent,ccySymbol,declareIncomeBusy,incomeApproved} = this.props;
        const {declareIncome} = this.props;
        let mDeclared;

        return (
            <div className="navbar-light col-lg-4 container-fluid row m-0">
                {
                    declareIncomeBusy?"Busy processing income declaration":
                        <Fragment>
                            <div className="col-lg-12">
                                <_CcyRow text="Declared income" bold={false} value={mCurrent} ccySymbol={ccySymbol}/>
                            </div>
                            <div className="col-lg-12 small">
                                Your income is currently:&nbsp;
                                <span className={"badge "+(incomeApproved>0?"badge-info":"badge-danger")}>{incomeApproved>0?"Officially approved":(incomeApproved<0?"Pending approval":"Not approved")}</span>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <input ref={(input) => mDeclared = input}
                                           type="text" className="form-control form-control-sm rounded-0 m-0"
                                           placeholder={mCurrent.toFixed(2)+" "+ccySymbol} required/>
                                </div>
                            </div>
                            <div className="col-lg-12 p-0 m-0">
                                <_ActionButton text="Declare new income" action={() => declareIncome(mDeclared.value)}
                                               buttonType="btn-primary m-0"/>
                            </div>
                        </Fragment>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ccySymbol: state.client.population.ccySymbol,
    mCurrent: state.client.member.mCurrent,
    incomeApproved: state.client.user.incomeApproved,
    declareIncomeBusy: state.session.busy.action.declareIncome,
});

const MemberDeclareIncome = connect(mapStateToProps,{declareIncome})(_MemberDeclareIncome);

export default MemberDeclareIncome;