import React from 'react';
import {connect} from "react-redux";

const _GlobalStatsUsers = ({
    nUser,
}) => (
    <span className="text-primary text-center small mr-2">
        A {nUser}-strong community for sustainable income redistribution.
    </span>
);

const mapStateToProps = state => ({
    nUser:      state.global.stats.nUser,
});

const GlobalStatsUsers = connect(mapStateToProps,{})(_GlobalStatsUsers);

export default GlobalStatsUsers;