import React, {Fragment} from 'react';
import { connect } from "react-redux";

const _MemberInfo = ({
    populationId,
    countryName,
    ccyId,
    ccyName,
    ccySymbol,
    exrate,
    thrubiPriceSilver,
    thrubiPriceSilverNext,
    thrubiPriceGold,
}) => (
    <Fragment>
        <div className="col-lg-9 py-3">
            <span>{countryName}/{ccyName}({ccyId}) <span className="small">(pid#{populationId})</span></span>
            <span>&nbsp;| 1.00Ξ = {exrate.toFixed(2)}{ccySymbol}</span>
            <span>&nbsp;| 1.00$₮ = {thrubiPriceSilver.toFixed(2)}{ccySymbol}</span>
            <span>&nbsp;| 1.00$₮ = {thrubiPriceSilverNext.toFixed(2)}{ccySymbol} (next)</span>
            <span>&nbsp;| 1.00₲₮ = {thrubiPriceGold.toFixed(2)}{ccySymbol}</span>
        </div>
    </Fragment>
);

const mapStateToProps = (state) => ({
    loggedIn: state.client.userAccess.loggedIn,
    populationId: state.client.population.id,
    countryName: state.client.population.countryName,
    ccyId: state.client.population.ccyId,
    ccyName: state.client.population.ccyName,
    ccySymbol: state.client.population.ccySymbol,
    exrate: state.global.market.exrate,
    thrubiPriceSilver: state.client.population.thrubiPriceSilver,
    thrubiPriceSilverNext: state.client.population.thrubiPriceSilverNext,
    thrubiPriceGold: state.client.population.thrubiPriceGold,
});

const MemberInfo = connect(mapStateToProps,{})(_MemberInfo);

export default MemberInfo;