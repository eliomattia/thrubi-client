import React, {Fragment} from 'react';
import _CcyRow from './_CcyRow';

const _MemberSilver = ({
    ccySymbol,
    member,
    exrate,
    thrubiPriceSilver,
    thrubiPriceGold,
    optionViewHistory,
    optionAdvancedMode,
}) => (
    <div className="container">
        {
            optionAdvancedMode ?
                <Fragment>
                    <_CcyRow text="My Thrubi Silver ₮$"     bold={true} value={ member.thrubiSilver} ccySymbol={"₮$"} />
                    <_CcyRow text="Next month ₮$"           bold={false} value={ member.thrubiSilverNext} ccySymbol={"₮$"} />
                    <_CcyRow text="Conversion to gold cost" bold={false} value={(member.thrubiSilver*thrubiPriceSilver)} ccySymbol={ccySymbol} />
                    <_CcyRow text="Gold value"              bold={false} value={(member.thrubiSilver*thrubiPriceGold)} ccySymbol={ccySymbol} />
                    <_CcyRow text="Remaining Ξ"             bold={false} value={ member.thrubiSilverEth} ccySymbol={"Ξ"} />
                </Fragment>
                :
                <Fragment>
                    <_CcyRow text="My Thrubi Silver ₮$"     bold={true} value={ member.thrubiSilver} ccySymbol={"₮$"} />
                    <_CcyRow text="Conversion to gold cost" bold={false} value={(member.thrubiSilver*thrubiPriceSilver)} ccySymbol={ccySymbol} />
                    <_CcyRow text="Gold value"              bold={false} value={(member.thrubiSilver*thrubiPriceGold)} ccySymbol={ccySymbol} />
                </Fragment>
        }
        {
            !optionViewHistory ? "" :
                    <_CcyRow text="Total transformed"       bold={false} value={ member.thrubiSilverTransformTotal} ccySymbol={ccySymbol} />
        }
    </div>
);

export default _MemberSilver;

