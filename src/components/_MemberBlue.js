import React, {Fragment} from 'react';
import _CcyRow from './_CcyRow';
import _ActionButton from "./_ActionButton";
import MemberOptions from "./MemberOptions";

const _MemberBlue = ({
    ccySymbol,
    member,
    exrate,
    optionViewHistory,
    optionAdvancedMode,
}) => (
    <div className="container-fluid">
        {
            optionAdvancedMode ?
                <Fragment>
                    <_CcyRow text="My Thrubi Blue ₮B"    bold={false} value={ member.thrubiBlue}             ccySymbol="₮B" />
                    <_CcyRow text="Next month ₮B"        bold={false} value={ member.thrubiBlueNext}         ccySymbol="₮B" />
                    <_CcyRow text="Claimable Ξ"                 bold={false} value={ member.thrubiBlueEth}          ccySymbol="Ξ" />
                    <_CcyRow text="₮B awards"                   bold={false} value={ member.thrubiBlueAward}        ccySymbol={ccySymbol} />
                    <_CcyRow text={"Claimable in "+ccySymbol}   bold={true}  value={(member.thrubiBlueEth*exrate)}  ccySymbol={ccySymbol} />
                </Fragment>
            :
                <Fragment>
                    <_CcyRow text="My Thrubi Blue ₮B"    bold={false} value={ member.thrubiBlue}             ccySymbol="₮B" />
                    <_CcyRow text={"Claimable in "+ccySymbol}   bold={true}  value={(member.thrubiBlueEth*exrate)}  ccySymbol={ccySymbol} />
                </Fragment>
        }
        {
            !optionViewHistory ? "" :
                <Fragment>
                    <_CcyRow text="Total awards"                bold={false} value={member.thrubiBlueAwardTotal}    ccySymbol={ccySymbol} />
                    <_CcyRow text="Total claimed"               bold={false} value={member.thrubiBlueClaimTotal}    ccySymbol={ccySymbol} />
                </Fragment>
        }
        <MemberOptions color="primary"/>
    </div>
);

export default _MemberBlue;

