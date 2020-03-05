import React from "react";
import {connect} from "react-redux";
import GlobalStatsUsers from "./GlobalStatsUsers";
import EthBadges from "./EthBadges";

const _Header = ({ethNetwork,ethAddress}) => (
    <div className="container-fluid navbar fixed-top flex-md-nowrap p-0 titleBar bg-light">
        <div className="col-lg-8 d-flex justify-content-center justify-content-md-center justify-content-lg-start fullWidth text-left bg-light"
             style={{backgroundImage: "url("+process.env.PUBLIC_URL+"/logo.png",
                    backgroundSize: "50%",
                    backgroundPosition: "left",
                    backgroundRepeat:"no-repeat",
                    backgroundBlendMode:"color-dodge"}}>
            <img  className="mr-2 logoThrubi" src={process.env.PUBLIC_URL+"/logo.png"} alt="Thrubi logo" height="20px" width="20px"
                  style={{filter:"brightness(90%)"}}  />
            <span className="mr-2 alignBottom navbar-brand thrubiGradient"><h4><b>Thrubi</b></h4></span>
            <div className="d-none d-lg-block alignBottom"><GlobalStatsUsers/></div>
        </div>
        <EthBadges position="H" />
    </div>
);

const mapStateToProps = state => ({
});

const Header = connect(mapStateToProps)(_Header);

export default Header;