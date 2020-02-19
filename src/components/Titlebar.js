import React from 'react'
import {connect} from "react-redux";
import GlobalStats from "./GlobalStats";

const _Titlebar = ({ethNetwork,ethAddress}) => (
    <div className="container-fluid navbar fixed-top flex-md-nowrap p-0 titleBar bg-light">
        <div className="col-lg-9 d-flex justify-content-center justify-content-md-center justify-content-lg-start fullWidth text-left">
            <img  className="mr-2 logoThrubi" src={process.env.PUBLIC_URL+"/logo.png"} alt="Thrubi logo" height="20px" width="20px" />
            <span className="mr-2 alignBottom navbar-brand thrubiGradient"><b>Thrubi App</b></span>
            <span className="d-none d-xl-block mr-2 alignBottom text-dark navbar-nav">Welcome to Thrubi!</span>
            <div className="d-none d-lg-inline-block alignBottom"><GlobalStats/></div>
        </div>
        <div className="col-lg-3 d-none d-lg-block float-right mr-0 my-2 text-right consoleFont">
            <div className="navbar-nav small alignBottom">
                {ethNetwork&&ethAddress?(
                    <div>
                        <span className="badge badge-warning d-none d-xl-inline"><span className="">network/</span>{ethNetwork}</span>
                        <span className="badge badge-info">{ethAddress}</span>
                    </div>
                ):("Accessing blockchain data")}
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    ethNetwork: state.client.userAccess.ethNetwork,
    ethAddress: state.client.userAccess.ethAddress,
});

const Titlebar = connect(mapStateToProps)(_Titlebar);

export default Titlebar;