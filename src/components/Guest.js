import React,{Component,Fragment} from "react";
import {connect} from "react-redux";
import "./styles/App.scss";
import _ActionButton from "./_ActionButton";
import {guestSubscribeNewsletter} from "../actions/guest";


class _Guest extends Component {
    componentDidMount() {
        this.setState({guestSubscribed:false});
    }

    render() {
        const {guestSubscribed} = this.props;
        const {guestSubscribeNewsletter} = this.props;
        let guestEmail;

        return (
            <Fragment>
                <div className="w-100 px-2 py-4 text-center">
                    <p className="display-4 m-2 px-2">
                        A <span className="thrubiGradient">Thrubi</span> account gets you
                        a <span className="thrubiGradient">universal basic income.</span>
                    </p>
                    <h4 className="m-2 px-2">
                        It is calculated based on your current earnings and funded by wealthy individuals.
                    </h4>
                    <h4 className="display-2 m-0 p-2">
                        Our purpose? <span className="thrubiGradient">Solve extreme poverty.</span>
                    </h4>
                </div>
                <div className="container-fluid row mx-0 my-4 mb-5 p-0 text-center w-100 bg-light">
                    <div className="col-lg-3 p-0 d-flex flex-column">
                        <div className="mx-md-0 mx-lg-3 px-0 py-2 pb-4 bg-primary text-light d-flex flex-grow-1">
                            <div className="w-100 h-100">
                                <p className="display-1">1.</p>
                                <p className="p-4">Sign up for a Thrubi account using one of the methods below</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0 m-0 d-flex flex-column">
                        <div className="mx-md-0 ml-lg-0 mr-lg-3 px-0 py-2 pb-4 bg-secondary text-light d-flex flex-grow-1">
                            <div className="w-100 h-100">
                                <p className="display-1">2.</p>
                                <p className="px-2 mb-2">{guestSubscribed?"Subscribed to the newsletter!":"Subscribe to the newsletter"}</p>
                                {
                                    guestSubscribed?"":
                                        <Fragment>
                                            <br className="d-lg-none" />
                                            <input ref={input => guestEmail = input}
                                               type="text" className="d-inline-block form-control form-control-sm rounded-0 m-0 w-75"
                                               placeholder="My email address" required/>
                                            <br className="d-lg-none" />
                                            <_ActionButton buttonType=" d-inline-block w-75 btn-outline-light mx-2 " noMargin="px-2" text="Keep me up to date"
                                                            action={() => guestSubscribeNewsletter(guestEmail.value)} />
                                        </Fragment>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 p-0 d-flex flex-column">
                        <div className="mx-md-0 ml-lg-0 mr-lg-3 px-0 py-2 pb-4 bg-success text-light d-flex flex-grow-1">
                            <div className="w-100 h-100">
                                <p className="display-1">3.</p>
                                <p className="p-4">Learn more about Thrubi in the sections below</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };
}

const mapStateToProps = state => ({
    guestSubscribed: state.client.guest.subscribed,
});

const Guest = connect(mapStateToProps,{guestSubscribeNewsletter})(_Guest);

export default Guest;


