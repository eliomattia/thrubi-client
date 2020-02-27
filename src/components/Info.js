import React, { Component } from "react";
import { connect } from "react-redux";
import _ActionButton from "./_ActionButton";

class _Info extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row py-2 rounded-bottom">
                    <div className="col-lg-4 p-0 navbar-light">
                        <div className="mr-0 mr-lg-3 my-2 my-lg-0 thrubiBlue">
                            <div style={{backgroundImage: "url("+process.env.PUBLIC_URL+"/jpg/crowd.jpg)"}}
                                 className="border-0 container-fluid m-0 everybody p-4 text-primary">
                                <h2 className="text-center text-lg-left"><b>Vision</b></h2>
                                <p>
                                    As a Thrubi member, you will receive Thrubi Blue each month, based on your current income.
                                    Your Thrubi Blue will give you rights to regular payments.
                                </p>
                                <_ActionButton text="Sign up" action={() => {}} buttonType="my-4 btn-outline-primary" />
                            </div>
                            <div className="border-0 container-fluid m-0 overflow-hidden topLeft p-4 opaque text-primary">
                                <h2 className="text-center text-lg-left"><b>Vision</b></h2>
                                <p>
                                    As a Thrubi member, you will receive Thrubi Blue each month, based on your current income.
                                    Your Thrubi Blue will give you rights to regular payments.
                                </p>
                                <_ActionButton text="Sign up" action={() => {}} buttonType="my-4 btn-outline-primary" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0 navbar-light">
                        <div className="mr-0 mr-lg-3 my-2 my-lg-0 thrubiSilver">
                            <div style={{backgroundImage: "url("+process.env.PUBLIC_URL+"/jpg/hanauer.jpg)",backgroundSize: "100%"}}
                                 className="border-0 container-fluid m-0 wealthy p-4 text-secondary">
                                <h2 className="text-center text-lg-left"><b>Wealthy individuals</b></h2>
                                <p>
                                    As a wealthy individual, you will have access to purchasing Thrubi Gold.
                                    The purchase costs will be awarded to all Thrubi members in your country according to their income.
                                </p>
                                <_ActionButton text="Sign up" action={() => {}} buttonType="my-4 btn-outline-secondary" />
                            </div>
                            <div className="border-0 container-fluid m-0 overflow-hidden topLeft p-4 opaque text-secondary">
                                <h2 className="text-center text-lg-left"><b>Wealthy individuals</b></h2>
                                <p>
                                    As a wealthy individual, you will have access to purchasing Thrubi Gold.
                                    The purchase costs will be awarded to all Thrubi members in your country according to their income.
                                </p>
                                <_ActionButton text="Sign up" action={() => {}} buttonType="my-4 btn-outline-secondary" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0 navbar-light">
                        <div className="mr-0 mr-lg-3 my-2 my-lg-0 thrubiGold">
                            <div style={{backgroundImage: "url("+process.env.PUBLIC_URL+"/jpg/futuristic.jpg)"}}
                                 className="border-0 container-fluid m-0 societies p-4 text-success">
                                <h2 className="text-center text-lg-left"><b>Thriving societies</b></h2>
                                <p>
                                    Thrubi is powered by in-house social models and public <a
                                    target="_blank" className="text-success" rel="noopener noreferrer" href="https://www.irs.gov">IRS.gov</a> and <a
                                    target="_blank" className="text-success" rel="noopener noreferrer" href="https://wid.world">wid.world</a> income inequality data.
                                    Start accepting Thrubi Gold to fulfill tax duties for your country.
                                </p>
                                <_ActionButton text="Sign up" action={() => {}} buttonType="my-4 btn-outline-success" />
                            </div>
                            <div className="border-0 container-fluid m-0 overflow-hidden topLeft p-4 opaque text-success">
                                <h2 className="text-center text-lg-left"><b>Thriving societies</b></h2>
                                <p>
                                    Thrubi is powered by in-house social models and public <a
                                    target="_blank" className="text-success" rel="noopener noreferrer" href="https://www.irs.gov">IRS.gov</a> and <a
                                    target="_blank" className="text-success" rel="noopener noreferrer" href="https://wid.world">wid.world</a> income inequality data.
                                    Start accepting Thrubi Gold to fulfill tax duties for your country.
                                </p>
                                <_ActionButton text="Sign up" action={() => {}} buttonType="my-4 btn-outline-success" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const Info = connect(mapStateToProps,{})(_Info);

export default Info;