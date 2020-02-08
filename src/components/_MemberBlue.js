import React, {Fragment} from 'react';
import _CcyRow from './_CcyRow';

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
                    <_CcyRow text="Your ₿₮ level"               muted={false} bold={false} value={ member.thrubiBlue} ccySymbol={"₿₮"} />
                    <_CcyRow text="Next month ₿₮"               muted={true}  bold={false} value={ member.thrubiBlueNext} ccySymbol={"₿₮"} />
                    <_CcyRow text="Claimable Ξ"                 muted={false} bold={false} value={ member.thrubiBlueEth} ccySymbol={"Ξ"} />
                    <_CcyRow text="₿₮ awards"                   muted={false} bold={false} value={ member.thrubiBlueAward} ccySymbol={ccySymbol} />
                    <_CcyRow text={"Claimable in "+ccySymbol}   muted={false} bold={true}  value={(member.thrubiBlueEth*exrate)} ccySymbol={ccySymbol} />
                </Fragment>
            :
                <Fragment>
                    <_CcyRow text="Your ₿₮ level"               muted={false} bold={false} value={ member.thrubiBlue} ccySymbol={"₿₮"} />
                    <_CcyRow text={"Claimable in "+ccySymbol}   muted={false} bold={true}  value={(member.thrubiBlueEth*exrate)} ccySymbol={ccySymbol} />
                </Fragment>
        }
        {
            !optionViewHistory ? "" :
                <Fragment>
                    <_CcyRow text="Total awards"                muted={true}  bold={false} value={member.thrubiBlueAwardTotal} ccySymbol={ccySymbol} />
                    <_CcyRow text="Total claimed"               muted={true}  bold={false} value={member.thrubiBlueClaimTotal} ccySymbol={ccySymbol} />
                </Fragment>
        }
    </div>
);

export default _MemberBlue;

