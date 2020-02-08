import React, {Fragment} from 'react';
import _CcyRow from './_CcyRow';

const _MemberGold = ({
    ccySymbol,
    member,
    thrubiPriceGold,
}) => (
    <Fragment>
        <div className="container-fluid">
            <_CcyRow text="Gold ₲₮"         muted={false} bold={true}  value={ member.thrubiGold} ccySymbol={"₲₮"} />
            <_CcyRow text="Market value"    muted={false} bold={false} value={(member.thrubiGold*thrubiPriceGold)} ccySymbol={ccySymbol} />
        </div>
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <input type="submit" value="Find gold Thrubi marketplace" className="btn btn-sm p-0 btn-block btn-light" />
        </form>
    </Fragment>
);

export default _MemberGold;

