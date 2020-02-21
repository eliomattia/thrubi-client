import React,{Fragment} from "react";
import {connect} from "react-redux";
import GlobalStatsUsers from "./GlobalStatsUsers";
import GlobalStatsCountryCcy from "./GlobalStatsCountryCcy";

const _Footer = ({ethNetwork,ethAddress}) => (
    <Fragment>
        <div className="d-block d-lg-none container-fluid flex-md-nowrap p-0 footer">
            <div className="col-lg-12 float-right m-0 py-2 pt-2 text-center bg-light">
                <div className="text-dark navbar-nav pb-2">Welcome to Thrubi!</div>
                <GlobalStatsUsers />
                <GlobalStatsCountryCcy/>
            </div>
            {
                !ethNetwork || !ethAddress ? "" :
                    <div className="col-lg-12 float-right mx-0 my-0 mb-1 text-center bg-light">
                        <div className="navbar-nav small consoleFont">
                            <div>
                                <span className="badge badge-warning"><span className="">network/</span>{ethNetwork}</span>
                                <span className="badge badge-info">{ethAddress}</span>
                            </div>
                        </div>
                    </div>
            }
            <div className="col-lg-12 float-right mx-0 my-0 mb-1 text-center bg-light">
                <div className="my-2 text-center"><a className="nav-link text-primary" href="mailto:info@thrubi.com">Contact: info@thrubi.com</a></div>
            </div>
        </div>
        <div className="d-none d-lg-flex flex-md-nowrap p-0 container-fluid flex-grow-1 footer">
            <div className="col-lg-12 float-right m-0 text-center bg-light">
                <div className="my-2 text-center">
                    <GlobalStatsCountryCcy/>
                    <a className="nav-link text-primary" href="mailto:info@thrubi.com">Contact: info@thrubi.com</a>
                </div> {/* • */}
            </div>
        </div>
    </Fragment>
);

const mapStateToProps = state => ({
    ethNetwork: state.client.userAccess.ethNetwork,
    ethAddress: state.client.userAccess.ethAddress,
});

const Footer = connect(mapStateToProps)(_Footer);

export default Footer;