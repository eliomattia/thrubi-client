import React from "react";
import {connect} from "react-redux";
import _CcyRow from "./_CcyRow";
import _ActionButton from "./_ActionButton";
import {declareIncome} from "../actions/userMenu";

const _DeclareIncome = ({deactivated,populationId,mCurrent,ccySymbol,declareIncomeBusy,declareIncome}) => {
    let mDeclared;

    return (
        <div className="container-fluid">
            {
                deactivated ? "User deactivated, please activate user to declare income" :
                    populationId===-1 ? "No population selected, please select a population to declare income" :
                        declareIncomeBusy ? "Busy processing income declaration" :
                            <div className="row">
                                <div className="col-lg-4 py-3">
                                    <_CcyRow text="Declared income" muted={false} bold={false} value={mCurrent} ccySymbol={ccySymbol} />
                                </div>
                                <div className="col-lg-4 py-1">
                                    <input id="newUserDeclaredM" ref={(input) => mDeclared = input}
                                           type="text" className="form-control form-control-sm rounded-0 my-1"
                                           placeholder={mCurrent.toFixed(2)+" "+ccySymbol} required />
                                </div>
                                <div className="col-lg-4">
                                    <_ActionButton text="Declare new income" action={() => declareIncome(mDeclared.value)} buttonType="btn-primary" />
                                </div>
                            </div>
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    deactivated: state.client.user.deactivated,
    populationId: state.client.population.id,
    ccySymbol: state.client.population.ccySymbol,
    mCurrent: state.client.member.mCurrent,
    declareIncomeBusy: state.session.busy.action.declareIncome,
});

const DeclareIncome = connect(mapStateToProps,{declareIncome})(_DeclareIncome);

export default DeclareIncome;