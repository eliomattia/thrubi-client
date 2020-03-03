import React from "react";
import {connect} from "react-redux";

const _GlobalStatsUsers = ({
    nUser,
}) => (
    <p className="text-primary text-center small my-0 mr-2">
        Thrubi is a {/*{nUser}-strong */}worldwide community where Universal Basic Income supply meets demand.
    </p>
);

const mapStateToProps = state => ({
    nUser:      state.global.stats.nUser,
});

const GlobalStatsUsers = connect(mapStateToProps,{})(_GlobalStatsUsers);

export default GlobalStatsUsers;