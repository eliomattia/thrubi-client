import React, {Fragment} from 'react';
import _CcyRow from './_CcyRow';
import _ActionButton from "./_ActionButton";

const _MemberGold = ({
    ccySymbol,
    member,
    thrubiPriceGold,
}) => (
    <Fragment>
        <div className="container-fluid">
            <_CcyRow text="Gold ₲₮"         bold={true}  value={ member.thrubiGold} ccySymbol={"₲₮"} />
            <_CcyRow text="Market value"    bold={false} value={(member.thrubiGold*thrubiPriceGold)} ccySymbol={ccySymbol} />
        </div>
        <_ActionButton action={() => {}} text="Find gold Thrubi marketplace" buttonType="btn-outline-success" />
    </Fragment>
);

export default _MemberGold;

