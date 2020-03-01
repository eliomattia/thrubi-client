import React,{Component,Fragment} from "react";
import {connect} from "react-redux";
import _ActionButton from "./_ActionButton";
import {logAction} from "../actions/log";
import {loggableActionType,loggableActionValue} from "../config/user";

class _Info extends Component {
    visionText = () => (
        <Fragment>
            <ul>
                <li>Become a Thrubi member</li>
                <li>Certify your identity</li>
                <li>Declare and verify your income</li>
                <li>Be assigned your <b>Thrubi Blue</b> level (lower income means higher)</li>
                <li>Receive your basic income</li>
            </ul>
        </Fragment>
    );

    wealthyText = () => (
        <Fragment>
            <ul>
                <li>Become a Thrubi member</li>
                <li>Certify your identity</li>
                <li>Declare and verify your income</li>
                <li>Be assigned your <b>Thrubi Silver</b> level (higher income means higher)</li>
                <li>Purchase <b>Thrubi Gold</b></li>
                <li>The purchase proceedings will fund basic income in your country</li>
            </ul>
        </Fragment>
    );

    societiesText = () => (
        <Fragment>
            Thrubi is powered by:
            <ul>
                <li>In-house social models</li>
                <li>Public <a
                    target="_blank" className="text-success" rel="noopener noreferrer" href="https://www.irs.gov">IRS.gov</a> and <a
                    target="_blank" className="text-success" rel="noopener noreferrer" href="https://wid.world">wid.world</a> income inequality data</li>
                <li>Start accepting Thrubi Gold to fulfill tax duties for your country.</li>
            </ul>
        </Fragment>
    );


    render() {
        const {logAction} = this.props;
        return(
            <div className="container-fluid">
                <div className="row py-2 rounded-bottom">
                    {
                        [
                            {actions: [
                                    {text:"How to certify my identity?",                actionValue:loggableActionValue.VISION_IDENTITY},
                                    {text:"Should I disclose my income?",               actionValue:loggableActionValue.VISION_INCOME_DISCLOSE},
                                    {text:"How will Thrubi verify my income?",          actionValue:loggableActionValue.VISION_INCOME_VERIFY},
                                    {text:"Will I receive basic income every month?",   actionValue:loggableActionValue.VISION_UBI_MONTHLY},
                                ],
                                style:"thrubiBlue",    image:"/jpg/crowd.jpg",     bg:"everybody", color:"primary",     header:"Vision",                text:this.visionText(),},
                            {actions: [
                                    {text:"What about my Thrubi Gold?",                                                         actionValue:loggableActionValue.WEALTHY_GOLD},
                                    {text:"I represent a company. Can I contribute?",                                           actionValue:loggableActionValue.WEALTHY_COMPANY},
                                    {text:"Just one country seems too restrictive. What about a worldwide basic income?",       actionValue:loggableActionValue.WEALTHY_WORLDWIDE},
                                ],
                                style:"thrubiSilver",  image:"/jpg/hanauer.jpg",   bg:"wealthy",   color:"secondary",   header:"Wealthy individuals",   text:this.wealthyText(),},
                            {actions: [
                                    {text:"Are the models publicly available?",                                                 actionValue:loggableActionValue.SOCIETIES_MODELS_PUBLIC},
                                    {text:"I would like to learn more about the social models used to determine basic income.", actionValue:loggableActionValue.SOCIETIES_MODELS_ABOUT},
                                ],
                                style:"thrubiGold",    image:"/jpg/futuristic.jpg",bg:"societies", color:"success",     header:"Thriving societies",    text:this.societiesText(),},
                        ].map(e => (
                                <div className="col-lg-4 p-0 navbar-light">
                                    <div className={"mr-0 mr-lg-3 my-2 my-lg-0 "+e.style}>
                                        <div style={{backgroundImage: "url("+process.env.PUBLIC_URL+e.image,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}
                                             className={"border-0 container-fluid m-0 "+e.bg+" p-4 text-"+e.color}>
                                            <h2 className="text-center text-lg-left"><b>{e.header}</b></h2>
                                            <p>{e.text}</p>
                                            {e.actions.map(a => <_ActionButton text="Learn more" buttonType={"my-4 btn-outline-"+e.color} action={null} />)}
                                        </div>
                                        <div className={"border-0 container-fluid m-0 overflow-hidden topLeft p-4 opaque text-"+e.color}>
                                            <h2 className="text-center text-lg-left"><b>{e.header}</b></h2>
                                            <p>{e.text}</p>
                                            {e.actions.map(a => <_ActionButton text={a.text} buttonType={"my-4 btn-outline-"+e.color} action={() => {logAction(loggableActionType.clickHomeButton,a.actionValue)}} />)}
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const Info = connect(mapStateToProps,{logAction})(_Info);

export default Info;