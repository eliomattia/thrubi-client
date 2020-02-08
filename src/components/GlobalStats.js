import React from 'react';
import { connect } from "react-redux";

const _GlobalStats = ({
    nUser,
    nCcy,
    nCountry,
}) => (
    <span className="text-primary d-none d-lg-inline-block text-center small mr-2 alignBottom">
        {nUser} {nUser===1?"user":"users"} using Thrubi in {nCountry} {nCountry===1?"country":"countries"} and {nCcy} {nCcy===1?"currency":"currencies"}
    </span>
);

const mapStateToProps = (state) => ({
    nUser: state.global.stats.nUser,
    nCountry: state.global.stats.nCountry,
    nCcy: state.global.stats.nCcy,
});

const GlobalStats = connect(mapStateToProps,{})(_GlobalStats);

export default GlobalStats;