import React,{Fragment} from "react";
import {connect} from "react-redux";
import GlobalStats from "./GlobalStats";

const _Footer = ({ethNetwork,ethAddress}) => (
    <Fragment>
        <div className="d-block d-lg-none container-fluid flex-md-nowrap p-0 footer bg-light">
            <div className="col-lg-12 float-right mx-0 my-0 pt-2 text-center">
                <div className="text-dark navbar-nav">Welcome to Thrubi!</div>
                <GlobalStats/>
            </div>
            <div className="col-lg-12 float-right mx-0 my-0 mb-1 text-center consoleFont">
                <div className="navbar-nav small">
                    {ethNetwork&&ethAddress?(
                        <div>
                            <span className="badge badge-warning">network/{ethNetwork}</span>
                            <span className="badge badge-info">{ethAddress}</span>
                        </div>
                    ):("Accessing blockchain data")}
                </div>
                <div className="my-2 text-center">Contact us: info@thrubi.com</div>
            </div>
        </div>
        <div className="d-none d-lg-block container-fluid flex-md-nowrap p-0 footer bg-light">
            <div className="col-lg-12 float-right m-0 text-center">
                <div className="my-2 text-center consoleFont">Contact us: info@thrubi.com</div> {/* • */}
            </div>
        </div>
    </Fragment>
);

const mapStateToProps = (state) => ({
    ethNetwork: state.client.userAccess.ethNetwork,
    ethAddress: state.client.userAccess.ethAddress,
});

const Footer = connect(mapStateToProps)(_Footer);

export default Footer;