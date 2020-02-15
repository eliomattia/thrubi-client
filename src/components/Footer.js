import React from 'react'
import { connect } from "react-redux";
import GlobalStats from "./GlobalStats";

const _Footer = ({ethNetwork,ethAddress}) => (
    <div className="d-block d-lg-none container-fluid flex-md-nowrap p-0 footer bg-light">
        <div className="col-lg-12 float-right mx-0 my-0 pt-2 text-center">
            <div className="text-dark navbar-nav">Welcome to Thrubi!</div>
            <GlobalStats/>
        </div>
        <div className="col-lg-12 float-right mx-0 my-0 text-center">
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