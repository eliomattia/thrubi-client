import React,{Component} from "react";
import {connect} from "react-redux";
import "./styles/App.scss";
import Chart from "./Chart";


class _GuestInfographics extends Component {
    render() {
        return (
            <div className="container-fluid m-0 p-3 bg-white">
                <br />
                Thrubi uses the income distributions shown here to build models to calculate individual Universal Basic Income.
                <div className="text-center py-3">
                    <br />
                    <b>Income distribution, United States of America (USA), 2018. Public data: IRS.gov.</b>
                    <Chart />
                    <br />
                    <span className="small"><i>More countries coming soon</i></span>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    guestSubscribed: state.client.guest.subscribed,
});

const GuestInfographics = connect(mapStateToProps,{})(_GuestInfographics);

export default GuestInfographics;


