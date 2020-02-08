import React, { Component } from "react";
import { connect } from "react-redux";
import _ActionButton from "./_ActionButton";

class _Info extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row py-2 rounded-bottom">
                    <div className="col-lg-4 p-0 navbar-light">
                        <div className="mx-2 thrubiBlue">
                            <div style={{"background-image": "url("+process.env.PUBLIC_URL+"/jpg/crowd.jpg)"}}
                                 className="border-0 container-fluid align-top m-0 everybody" />
                            <div className="border-0 container-fluid align-top m-0 overflow-hidden topLeft p-4 text-primary"><div className="opaque">
                                <h3>Everybody</h3>
                                <p>
                                    Be part of the sustainable societies of the future. If your country has adhered to a Thrubi plan,
                                    you will be awarded Thrubi Blue each month, based on your current income.
                                    Your Thrubi Blue will in turn give you the rights to regular payments.
                                    Nobody can be extremely poor or extremely rich with Thrubi.
                                </p>
                                <_ActionButton text="Learn more" action={() => {}} buttonType="btn-outline-primary" />
                            </div></div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0 navbar-light">
                        <div className="mx-2 thrubiSilver">
                            <div style={{"background-image": "url("+process.env.PUBLIC_URL+"/jpg/bloomberg.jpg)"}}
                                 className="border-0 container-fluid align-top m-0 wealthy" />
                            <div className="border-0 container-fluid align-top m-0 overflow-hidden topLeft p-4 text-secondary"><div className="opaque">
                                <h3>Wealthy individuals</h3>
                                <p>
                                    If you are an investor, choose a sustainable future. As a wealthy individual,
                                    you will have access to purchasing Thrubi Gold, the investment tool of sustainable societies.
                                    Thrubi Gold can only be purchased by redeeming Thrubi Silver, which you will be awarded according
                                    to your current income. Governments are accepting Thrubi Gold to pay tax duties.
                                </p>
                                <_ActionButton text="Learn more" action={() => {}} buttonType="btn-outline-secondary" />
                            </div></div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0 navbar-light">
                        <div className="mx-2 thrubiGold">
                            <div style={{"background-image": "url("+process.env.PUBLIC_URL+"/jpg/futuristic.jpg)"}}
                                 className="border-0 container-fluid align-top m-0 societies" />
                            <div className="border-0 container-fluid align-top m-0 overflow-hidden topLeft p-4 text-success"><div className="opaque">
                                <h3>Thriving societies</h3>
                                <p>
                                    If you are a sovereign government, you want your people to be at their best.
                                    Thrubi stabilizes a country's income distribution. Growth is shared amongst all participants
                                    of a society in a non-equal fashion: people with a higher net worth will stay richer.
                                    Thrubi, however, will ensure that a society becomes richer as a whole.
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

const mapStateToProps = (state) => ({
});

const Info = connect(mapStateToProps,{})(_Info);

export default Info;