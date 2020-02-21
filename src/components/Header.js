import React from "react";
import {connect} from "react-redux";
import GlobalStatsUsers from "./GlobalStatsUsers";

const _Header = ({ethNetwork,ethAddress}) => (
    <div className="container-fluid navbar fixed-top flex-md-nowrap p-0 titleBar bg-light">
        <div className="col-lg-8 d-flex justify-content-center justify-content-md-center justify-content-lg-start fullWidth text-left">
            <img  className="mr-2 logoThrubi" src={process.env.PUBLIC_URL+"/logo.png"} alt="Thrubi logo" height="20px" width="20px" />
            <span className="mr-2 alignBottom navbar-brand thrubiGradient"><b>Thrubi App</b></span>
            <span className="d-block mr-2 mt-1 alignBottom text-dark navbar-nav">
                <a href="https://twitter.com/thrubi_org?ref_src=twsrc%5Etfw" data-show-count="false" className="twitter-follow-button alignBottom">Follow @thrubi_org</a>
            </span>
            <div className="d-none d-lg-block alignBottom"><GlobalStatsUsers/></div>
        </div>
        <div className="col-lg-4 d-none d-lg-block float-right mr-0 my-2 text-right consoleFont">
            <div className="navbar-nav small alignBottom">
                {
                    !ethNetwork || !ethAddress ? "" :
                    <div>
                        <span className="badge badge-warning d-none d-xl-inline"><span className="">network/</span>{ethNetwork}</span>
                        <span className="badge badge-info">{ethAddress}</span>
                    </div>
                }
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    ethNetwork: state.client.userAccess.ethNetwork,
    ethAddress: state.client.userAccess.ethAddress,
});

const Header = connect(mapStateToProps)(_Header);

export default Header;