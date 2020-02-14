import React, {Fragment} from 'react';
import { connect } from "react-redux";

const _MemberInfo = ({
    ccySymbol,
    exrate,
    thrubiPriceSilver,
    thrubiPriceSilverNext,
    thrubiPriceGold,
}) => (
    <div className="col-sm-4 container-fluid p-0 m-0 small">
        <div className="col-sm-12 container-fluid row p-0 m-0">
            <div className="col-5 container-fluid p-0 m-0 text-right">
                <div className="col-sm-12 p-0">1.00Ξ</div>
                <div className="col-sm-12 p-0">1.00$₮</div>
                <div className="col-sm-12 p-0">1.00$₮</div>
                <div className="col-sm-12 p-0">1.00₲₮</div>
            </div>
            <div className="col-2 container-fluid p-0 m-0 text-center">
                <div className="col-sm-12 p-0">=</div>
                <div className="col-sm-12 p-0">=</div>
                <div className="col-sm-12 p-0">=</div>
                <div className="col-sm-12 p-0">=</div>
            </div>
            <div className="col-5 container-fluid p-0 m-0 text-left">
                <div className="col-sm-12 p-0">{exrate.toFixed(2)}{ccySymbol}</div>
                <div className="col-sm-12 p-0">{thrubiPriceSilver.toFixed(2)}{ccySymbol}</div>
                <div className="col-sm-12 p-0">{thrubiPriceSilverNext.toFixed(2)}{ccySymbol} (next)</div>
                <div className="col-sm-12 p-0">{thrubiPriceGold.toFixed(2)}{ccySymbol}</div>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    ccySymbol: state.client.population.ccySymbol,
    exrate: state.global.market.exrate,
    thrubiPriceSilver: state.client.population.thrubiPriceSilver,
    thrubiPriceSilverNext: state.client.population.thrubiPriceSilverNext,
    thrubiPriceGold: state.client.population.thrubiPriceGold,
});

const MemberInfo = connect(mapStateToProps,{})(_MemberInfo);

export default MemberInfo;