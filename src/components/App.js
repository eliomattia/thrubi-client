import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "./Header";
import User from "./User";
import Footer from "./Footer";
import Flare from "./Flare";
import {enableBlockchain} from "../actions/blockchain_ethereum";
import {startGlobalStatsWorker,stopGlobalStatsWorker} from "../actions/workers/globalStats";
import {fetchChannels,sendRedirect} from "../actions/auth";
import "./styles/App.scss";


class _App extends Component {
    componentDidMount() {
        const {sendRedirect} = this.props;
        if (window.location.search) {
            sendRedirect();
        } else {
            this.reload();
        }
    };

    componentWillUnmount() {
        stopGlobalStatsWorker();
    };

    reload() {
        const {startGlobalStatsWorker,fetchChannels,enableBlockchain} = this.props;
        return Promise.all([
            startGlobalStatsWorker(),
            fetchChannels(),
            enableBlockchain(),
        ]);
    };

    render() {
        const {busy,loggedIn} = this.props;
        return (
            <div className="thrubiApp text-primary d-flex flex-column align-items-stretch">
                <Header />
                {
                    <div className="mainView">
                        {
                            loggedIn ? "" :
                                <div className="w-100 py-2 pt-4 pb-1 text-center">
                                    <h4 className="display-4 d-inline-block p-2 pb-4">Rising inequality is toxic to growth</h4>
                                    <i className="d-inline-block">&nbsp;(Nick Hanauer)</i>
                                    <h5 className="m-0 px-2">
                                        With Thrubi, wealthy individuals can transfer money directly and simultaneously
                                        to everybody in their country
                                    </h5>
                                    <h4 className="m-0 p-2">
                                        Our purpose? Solve extreme poverty
                                    </h4>
                                    <h6 className="p-2 pt-4">
                                        Thrubi is powered by in-house social models and public <a
                                        target="_blank" className="text-primary" rel="noopener noreferrer" href="https://www.irs.gov">IRS.gov</a> and <a
                                        target="_blank" className="text-primary" rel="noopener noreferrer" href="https://wid.world">wid.world</a> income inequality data.
                                    </h6>
                                </div>
                        }
                        {
                            !busy ? <User /> :
                                <div className="text-center">
                                    App loading... or
                                    Ethereum config not found. Please authorize Thrubi in MetaMask.
                                    Not sure what this means? Find out how to enable Thrubi <b>here</b>!
                                </div>
                        }
                    </div>
                }
                <Footer />
                <Flare />
            </div>
        );
    };
}

const mapStateToProps = state => ({
    busy:               state.session.busy.component.app,
    loggedIn:           state.client.userAccess.loggedIn,
});

const App = connect(mapStateToProps,{startGlobalStatsWorker,stopGlobalStatsWorker,fetchChannels,enableBlockchain,sendRedirect})(_App);

export default App;


