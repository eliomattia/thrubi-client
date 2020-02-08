import React from 'react'
import { connect } from "react-redux";
import GlobalStats from "./GlobalStats";

const _Footer = ({ethNetwork,ethAddress}) => (
    <div className="d-none container-fluid navbar fixed-top flex-md-nowrap p-0 titleBar bg-light">
        <div className="col-lg-7 d-flex justify-content-center justify-content-md-center justify-content-lg-start fullWidth text-left">
            <img  className="mr-2 logoThrubi" src={process.env.PUBLIC_URL+"/logo.png"} alt="Thrubi logo" height="20px" width="20px" />
            <span className="mr-2 alignBottom navbar-brand thrubiGradient"><b>Thrubi App</b></span>
            <span className="d-none d-xl-block mr-2 alignBottom text-dark navbar-nav">Welcome to Thrubi!</span>
            <GlobalStats/>
        </div>
        <div className="col-lg-5 d-none d-lg-block float-right mr-0 my-2 text-right">
            <div className="navbar-nav small">
                {ethNetwork&&ethAddress?(
                    <div>
                        <span className="badge badge-warning">network/{ethNetwork}</span>
                        <span className="badge badge-info">{ethAddress}</span>
                    </div>
                ):("Accessing blockchain data")}
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    ethNetwork: state.client.userAccess.ethNetwork,
    ethAddress: state.client.userAccess.ethAddress,
});

const Footer = connect(mapStateToProps)(_Footer);

export default Footer;