import React from "react";
import {connect} from "react-redux";

const _GlobalStatsCountryCcy = ({
    nCcy,
    nCountry,
}) => (
    <span className="text-primary text-center small mr-2">
        Thrubi is launching in {nCountry} {nCountry===1?"country":"countries"} and {nCcy} {nCcy===1?"currency":"currencies"}.
    </span>
);

const mapStateToProps = state => ({
    nCountry:   state.global.stats.nCountry,
    nCcy:       state.global.stats.nCcy,
});

const GlobalStatsCountryCcy = connect(mapStateToProps,{})(_GlobalStatsCountryCcy);

export default GlobalStatsCountryCcy;