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
                            <div style={{"backgroundImage": "url("+process.env.PUBLIC_URL+"/jpg/crowd.jpg)"}}
                                 className="border-0 container-fluid align-top m-0 everybody" />
                            <div className="border-0 container-fluid align-top m-0 overflow-hidden topLeft p-4 text-primary"><div className="opaque">
                                <h3>Vision</h3>
                                <p>
                                    As a Thrubi member, you will receive Thrubi Blue each month, based on your current income.
                                    Your Thrubi Blue will in turn give you the rights to regular payments.
                                </p>
                                <_ActionButton text="Learn more" action={() => {}} buttonType="btn-outline-primary" />
                            </div></div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0 navbar-light">
                        <div className="mr-0 mr-lg-3 my-2 my-lg-0 thrubiSilver">
                            <div style={{"backgroundImage": "url("+process.env.PUBLIC_URL+"/jpg/bloomberg.jpg)"}}
                                 className="border-0 container-fluid align-top m-0 wealthy" />
                            <div className="border-0 container-fluid align-top m-0 overflow-hidden topLeft p-4 text-secondary"><div className="opaque">
                                <h3>Wealthy individuals</h3>
                                <p>
                                    As a wealthy individual, you will have access to purchasing Thrubi Gold.
                                    The purchase costs will be awarded to Thrubi members in your country according to their income.
                                </p>
                                <_ActionButton text="Learn more" action={() => {}} buttonType="btn-outline-secondary" />
                            </div></div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0 navbar-light">
                        <div className="mr-0 mr-lg-3 my-2 my-lg-0 thrubiGold">
                            <div style={{"backgroundImage": "url("+process.env.PUBLIC_URL+"/jpg/futuristic.jpg)"}}
                                 className="border-0 container-fluid align-top m-0 societies" />
                            <div className="border-0 container-fluid align-top m-0 overflow-hidden topLeft p-4 text-success"><div className="opaque">
                                <h3>Thriving societies</h3>
                                <p>
                                    Thrubi is powered by internal social models and public <a
                                    target="_blank" rel="noopener noreferrer" href="https://www.irs.gov">IRS</a> and <a
                                    target="_blank" rel="noopener noreferrer" href="https://wid.world">wid.world</a> income inequality data.
                                    Start accepting Thrubi Gold to fulfill tax duties for your country.
                                </p>
                                <_ActionButton text="Learn more" action={() => {}} buttonType="btn-outline-success" />
                            </div></div>
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