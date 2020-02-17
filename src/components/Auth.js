import React, {Component,Fragment} from "react";
import {connect} from "react-redux";
import Channel from "../classes/Channel";
import _ActionButton from "./_ActionButton";
import _RadioButtons from "./_RadioButtons";
import _KeyboardChannel from "./_KeyboardChannel";
import * as auth from "../actions/auth";
import {switchOptionUserMenu} from "../actions/user";
import userOptions from "../config/user";

class _Auth extends Component {
    componentDidUpdate() {
        const {busy,loggedIn,autoLogin,ethAddress} = this.props;
        const {loginBlockchainEthereum} = this.props;

        if ((!busy)&&(!loggedIn)&&(autoLogin)&&(ethAddress)) {
            loginBlockchainEthereum();
        }
    };

    componentWillUnmount() {
        const {logout} = this.props;
        logout({autoLogin:false});
    };
    
    authFunction(optionLoginCreate,channelName) {
        return this.props[optionLoginCreate.toLowerCase()+Channel.channelAuthFunctionName(channelName)];
    }

    render() {
        const {busy,loggedIn,optionLoginCreate,optionKeyboardMode,optionUserMenu,payChannel,channels} = this.props;
        const {switchOptionLoginCreate,switchOptionUserMenu,abandonKeyboard,setPayChannel,deleteChannel,logout} = this.props;

        return <div className="text-center small text-dark">
            {
                busy ? "Auth module busy..." :
                    <Fragment>
                        {
                            optionKeyboardMode === null ? "" :
                                <_KeyboardChannel
                                    text={Channel.keyboardChannelMessage(optionKeyboardMode)}
                                    action={this.props[optionKeyboardMode.toLowerCase() + "KeyboardForm"]}
                                    buttonType="btn btn-sm p-0 btn-primary"
                                    abandonAction={abandonKeyboard}
                                    abandonButtonType="btn btn-sm p-0 btn-secondary"/>
                        }
                        {
                            (optionKeyboardMode !== null) || (loggedIn) ? "" :
                                <Fragment>
                                    {
                                        Object.keys(channels).map((key) => {    //loop on individual channel types
                                            if (Channel.channelIsForLogin(channels[key]))
                                                return (
                                                    <_ActionButton
                                                        channel={key}
                                                        text={Channel.channelUserFriendlyName(key,optionLoginCreate)}
                                                        key={(optionLoginCreate === userOptions.optionLoginCreate.LOGIN ? "login" : "create")+key}
                                                        action={this.authFunction(optionLoginCreate,key)}
                                                        buttonType={"btn btn-sm p-0 btn-" + (optionLoginCreate === userOptions.optionLoginCreate.LOGIN ? "" : "outline-")}/>
                                                );
                                            else return "";
                                        })
                                    }
                                </Fragment>
                        }
                        {
                            loggedIn ? "" :
                                <_ActionButton
                                    text={optionLoginCreate === userOptions.optionLoginCreate.LOGIN ? "Create a new Thrubi account" : "I already have a Thrubi account"}
                                    action={switchOptionLoginCreate}
                                    buttonType="nav-link border-0 text-small text-primary"/>
                        }
                        {
                            (optionKeyboardMode !== null) || (!loggedIn) ? "" :
                                <Fragment>
                                    <_ActionButton text="Logout" action={logout} payload={{autoLogin: false}}
                                                   buttonType="btn btn-sm p-0 btn-secondary"/>
                                    <_RadioButtons columnSize="col-lg-6"
                                                   activeFilter={optionUserMenu}
                                                   checkedFilter={optionUserMenu}
                                                   action={switchOptionUserMenu}
                                                   elements={[  {color:"btn-outline-primary",key:userOptions.optionUserMenu.USER,    text:"My account",                 disabledFilter:optionUserMenu===userOptions.optionUserMenu.USER},
                                                                {color:"btn-outline-primary",key:userOptions.optionUserMenu.PAY,     text:"Payment",                    disabledFilter:optionUserMenu===userOptions.optionUserMenu.PAY},
                                                                {color:"btn-outline-primary",key:userOptions.optionUserMenu.MANAGE,  text:"Manage login credentials",   disabledFilter:optionUserMenu===userOptions.optionUserMenu.MANAGE},
                                                                {color:"btn-outline-primary",key:userOptions.optionUserMenu.ADD,     text:"Connect login credentials",  disabledFilter:optionUserMenu===userOptions.optionUserMenu.ADD}]}/>
                                    {
                                        optionUserMenu === userOptions.optionUserMenu.USER ? "" :
                                            <Fragment>
                                                {
                                                    optionUserMenu !== userOptions.optionUserMenu.PAY ? "" :
                                                        <div className="my-4">
                                                            My payment method:
                                                            <_RadioButtons columnSize="col-lg-12"
                                                                       activeFilter={payChannel}
                                                                       checkedFilter={payChannel}
                                                                       action={setPayChannel}
                                                                       elements={Object.keys(channels).map(key => {    //loop on individual channel types
                                                                            if (Channel.channelIsForPay(channels[key])) return ({
                                                                                key:key,
                                                                                channel:key,
                                                                                color:"btn-" + (Channel.channelIsOpen(channels[key]) ? "" : "outline-")+Channel.channelColor(key),
                                                                                disabledFilter:(key === payChannel),
                                                                                text:Channel.channelUserFriendlyName(key, (key === payChannel ? "USING" : (Channel.channelIsOpen(channels[key]) ? "USE" : "LINK")))
                                                                            }); else return null;
                                                                       }).filter(element=>element!==null)}/>
                                                        </div>
                                                }
                                                <div className="my-4">
                                                    {
                                                        [
                                                            {
                                                                mode:   "UPDATE",
                                                                action: (key) => this.props["update"+Channel.channelAuthFunctionName(key)],
                                                                color:  "",
                                                                filter: (channelMode) => ((optionUserMenu === userOptions.optionUserMenu.MANAGE) && ((Channel.channelIsForLogin(channelMode) || (Channel.channelIsForPay(channelMode))) && (Channel.channelIsOpen(channelMode))))
                                                            },
                                                            {
                                                                mode:   "ADD",
                                                                action: (key) => this.props["add"+Channel.channelAuthFunctionName(key)],
                                                                color:  "outline-",
                                                                filter: (channelMode) => ((optionUserMenu === userOptions.optionUserMenu.ADD) && (!Channel.channelIsOpen(channelMode)))
                                                            },
                                                            {
                                                                mode:   "DELETE",
                                                                action: (key) => () => deleteChannel(key),
                                                                color:  "outline-",
                                                                filter: (channelMode) => ((optionUserMenu === userOptions.optionUserMenu.MANAGE) && ((Channel.channelIsForLogin(channelMode) || (Channel.channelIsForPay(channelMode))) && (Channel.channelIsOpen(channelMode))))
                                                            }
                                                        ].map(actions => (
                                                            <div key={actions.mode}>
                                                                {
                                                                    Object.keys(channels).map(key => {    //loop on individual channel types
                                                                        if (actions.filter(channels[key])) return (
                                                                            <_ActionButton
                                                                                channel={key}
                                                                                text={Channel.channelUserFriendlyName(key, actions.mode)}
                                                                                action={actions.action(key)}
                                                                                key={actions.mode + key}
                                                                                buttonType={"btn btn-sm p-0 btn-" + actions.color}/>
                                                                        ); else return "";
                                                                    })
                                                                }
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </Fragment>
                                    }
                                </Fragment>
                        }
                    </Fragment>
            }
        </div>;
    }
}

const mapStateToProps = (state) => ({
    busy:               state.session.busy.component.auth,
    ethAddress:         state.client.userAccess.ethAddress,
    optionLoginCreate:  state.client.user.optionLoginCreate,
    optionKeyboardMode: state.client.user.optionKeyboardMode,
    optionUserMenu:     state.client.user.optionUserMenu,
    loggedIn:           state.client.userAccess.loggedIn,
    autoLogin:          state.client.userAccess.autoLogin,
    payChannel:         state.client.userAccess.payChannel,
    channels:           state.client.userAccess.channels,
});

const Auth = connect(mapStateToProps,Object.assign({},auth,{switchOptionUserMenu}))(_Auth);

export default Auth;