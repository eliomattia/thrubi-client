import React,{Fragment} from "react";
import {connect} from "react-redux";
import GlobalStatsUsers from "./GlobalStatsUsers";
import GlobalStatsCountryCcy from "./GlobalStatsCountryCcy";

const _Footer = ({ethNetwork,ethAddress}) => (
    <Fragment>
        <div className="d-block d-lg-none container-fluid flex-md-nowrap p-0 footer">
            <div className="col-lg-12 float-right m-0 py-2 pt-2 text-center bg-light"
                 style={{backgroundImage: "url("+process.env.PUBLIC_URL+"/logo.png",
                     backgroundSize: "50%",
                     backgroundPosition: "center",
                     backgroundRepeat:"no-repeat",
                     backgroundBlendMode:"color-dodge"}}>
                <GlobalStatsUsers />
                <span className="small d-block"><GlobalStatsCountryCcy/></span>
                <span className="mb-2 small">Public data provided by:</span>
                <br/>
                <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer"><img className="text-center d-inline mr-1 mb-1" alt="IRS.gov" height="80px" src={process.env.PUBLIC_URL+"/jpg/IRS.gov.jpg"} /></a>
                <a href="https://wid.world" target="_blank" rel="noopener noreferrer"><img className="text-center d-inline mr-1 mb-1" alt="wid.world" height="80px" src={process.env.PUBLIC_URL+"/png/wid.world.png"} /></a>
                <br/>
                <div className="px-1">
                    <img className="text-center d-inline mr-1 mb-1" alt="email" width="20px" src={process.env.PUBLIC_URL+"/png/email.png"} style={{filter:"opacity(.5) sepia(1) hue-rotate(180deg)"}} />
                    &nbsp;
                    <a className="text-center text-secondary" href="mailto:info@thrubi.com">
                        info@thrubi.com
                    </a>
                </div>
                <a href="https://twitter.com/thrubi_org?ref_src=twsrc%5Etfw" data-show-count="false" className="twitter-follow-button">Follow @thrubi_org</a>
                <br/>
            </div>
            {
                !ethNetwork || !ethAddress ? "" :
                    <div className="col-lg-12 float-right mx-0 my-0 pb-1 text-center bg-light">
                        <div className="navbar-nav small consoleFont">
                            <div>
                                <span className="badge badge-warning d-inline"><span className="">network/</span>{ethNetwork}</span>
                                <span className="badge badge-info d-inline">{ethAddress}</span>
                            </div>
                        </div>
                    </div>
            }
            <div className="col-lg-12 float-right mx-0 my-0 pb-1 text-center bg-light">
                <a href="https://discord.gg/ZUHPgyt" target="_blank" rel="noopener noreferrer">
                    <img className="text-center d-inline mx-0 my-3" alt="discord" height="50px" src={process.env.PUBLIC_URL+"/png/discord_grey.png"} />
                </a>
            </div>
            <div className="col-lg-12 float-right m-0 p-0 text-center text-success bg-light">
                <span className="d-block navbar-nav small">
                    <p className="d-inline-block">Rising inequality is toxic to growth</p>
                    <i className="d-inline-block small">&nbsp;&mdash; Nick Hanauer</i>
                </span>
                <div className="pt-0 pb-3">© 2020 Thrubi.com</div>
            </div>
        </div>
        <div className="d-none d-lg-flex flex-md-nowrap m-0 p-4 container-fluid flex-grow-1 footer bg-light"
             style={{backgroundImage: "url("+process.env.PUBLIC_URL+"/logo.png",
                 backgroundSize: "50%",
                 backgroundPosition: "center",
                 backgroundRepeat:"no-repeat",
                 backgroundBlendMode:"color-dodge"}}>
            <div className="col-lg-4 float-right m-0 px-0 py-3 text-left">
                <p className="m-0 p-0 mb-3">Public data provided by:</p>
                <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer"><img className="text-center d-inline mr-1 mb-1" alt="IRS.gov" height="80px" src={process.env.PUBLIC_URL+"/jpg/IRS.gov.jpg"} /></a>
                <a href="https://wid.world" target="_blank" rel="noopener noreferrer"><img className="text-center d-inline mr-1 mb-1" alt="wid.world" height="80px" src={process.env.PUBLIC_URL+"/png/wid.world.png"} /></a>
                <p className="m-0 p-0 mt-3"/>
                <GlobalStatsCountryCcy/>
                <div className="py-3">
                    <img className="text-center d-inline mr-1 mb-1" alt="email" width="20px" src={process.env.PUBLIC_URL+"/png/email.png"} style={{filter:"opacity(.5) sepia(1) hue-rotate(180deg)"}} />
                    &nbsp;
                    <a className="text-center text-secondary" href="mailto:info@thrubi.com">
                        info@thrubi.com
                    </a>
                </div>
                <a href="https://twitter.com/thrubi_org?ref_src=twsrc%5Etfw" data-show-count="false" className="twitter-follow-button">Follow @thrubi_org</a>
                <br/>
            </div>
            <div className="col-lg-4 float-right m-0 px-0 py-3 text-center text-secondary">
                <a href="https://discord.gg/ZUHPgyt" target="_blank" rel="noopener noreferrer">
                    <img className="text-center d-inline mx-0 mb-3" alt="discord" height="50px" src={process.env.PUBLIC_URL+"/png/discord_grey.png"} />
                </a>
                <iframe src="https://discordapp.com/widget?id=681677187044343841&theme=dark" width="350" height="300"
                        allowTransparency="true" frameBorder="0" />
            </div>
            <div className="col-lg-4 float-right m-0 px-0 py-3 text-right text-success">
                <span className="d-block navbar-nav">
                    <p className="d-inline-block">Rising inequality is toxic to growth</p>
                    <i className="d-inline-block small">&nbsp;&mdash; Nick Hanauer</i>
                </span>
                <div className="pb-3">© 2020 Thrubi.com</div>
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