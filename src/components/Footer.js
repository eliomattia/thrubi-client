import React from "react";
import {connect} from "react-redux";
import GlobalStatsUsers from "./GlobalStatsUsers";
import GlobalStatsCountryCcy from "./GlobalStatsCountryCcy";
import EthBadges from "./EthBadges";

const _Footer = ({ethNetwork,ethAddress}) => (
    <div className="bg-light flex-grow-1"
         style={{backgroundImage: "url("+process.env.PUBLIC_URL+"/logo.png",
             backgroundSize: "contain",
             backgroundPosition: "center",
             backgroundRepeat:"no-repeat",
             backgroundBlendMode:"color-dodge"}}>
        <div className="container row m-0 p-0 p-lg-4 footer">
            <div className="col-lg-4 m-0 px-0 py-2 py-lg-3 text-center text-lg-left">
                <div className="d-block d-lg-none mt-3">
                    <GlobalStatsUsers />
                    <span className="small d-block"><GlobalStatsCountryCcy/></span>
                </div>
                <p className="m-0 p-0 mt-3 mt-lg-0">Public data provided by:</p>
                <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer"><img className="text-center d-inline mr-1 mb-1" alt="IRS.gov" height="80px" src={process.env.PUBLIC_URL+"/jpg/IRS.gov.jpg"} /></a>
                <a href="https://wid.world" target="_blank" rel="noopener noreferrer"><img className="text-center d-inline mr-1 mb-1" alt="wid.world" height="80px" src={process.env.PUBLIC_URL+"/png/wid.world.png"} /></a>
                <div className="d-none d-lg-block mt-3">
                    <GlobalStatsCountryCcy/>
                </div>
                <div className="mt-3 px-1 py-lg-0 py-lg-1">
                    <img className="text-center d-inline mr-1 mb-1" alt="email" width="20px" src={process.env.PUBLIC_URL+"/png/email.png"} style={{filter:"opacity(.5) sepia(1) hue-rotate(180deg)"}} />
                    &nbsp;
                    <a className="text-center text-secondary" href="mailto:info@thrubi.com">
                        info@thrubi.com
                    </a>
                </div>
                <a href="https://twitter.com/thrubi_org?ref_src=twsrc%5Etfw" data-show-count="false" className="twitter-follow-button">Follow @thrubi_org</a>
                <br/>
                <a href="https://www.patreon.com/bePatron?u=30859926" data-patreon-widget-type="become-patron-button" className="mt-0 mt-lg-4">Become a Patron!</a>
                <div className="d-block d-lg-none mt-3">
                    <EthBadges position="F" />
                </div>
            </div>
            <div className="col-lg-4 m-0 px-0 pb-1 py-lg-3 text-center text-secondary">
                <a href="https://discord.gg/ZUHPgyt" target="_blank" rel="noopener noreferrer">
                    <img className="text-center d-inline mx-0 my-3" alt="discord" height="50px" src={process.env.PUBLIC_URL+"/png/discord_grey.png"} />
                </a>
                <div className="d-none d-lg-block">
                    <iframe title="discordFrame" src="https://discordapp.com/widget?id=681677187044343841&theme=dark" width="100%" height="250"
                            allowTransparency="true" frameBorder="0" />
                </div>
            </div>
            <div className="col-lg-4 m-0 p-0 py-lg-3 text-center text-lg-right text-success">
                <span className="d-block navbar-nav small">
                    <p className="d-inline-block">Rising inequality is toxic to growth</p>
                    <i className="d-inline-block small">&nbsp;&mdash; Nick Hanauer</i>
                </span>
                <div className="pt-0 pb-3">© 2020 Thrubi.com</div>
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
});

const Footer = connect(mapStateToProps)(_Footer);

export default Footer;