import actionType from "../config/actionTypes";

const userAccessInit = {
    ethNetwork:     null,
    ethAddress:     null,
    autoLogin:      false,
    loggedIn:       false,
    loginChannel:               null,
    payChannel:                 null,
    channels: {
        BLOCKCHAIN_ETHEREUM:    0,
        KEYBOARD:               0,
        FACEBOOK:               0,
        LINKEDIN:               0,
        GOOGLE:                 0,
        PAYPAL:                 0,
    },
    facebookStatus:         null,
    facebookUserId:         null,
    facebookUserAccessToken:null,
    linkedInWindow:         null,
    linkedInListener:       null,
    linkedInCode:           null,
    linkedInState:          null,
    googleWindow:           null,
    googleListener:         null,
    googleState:            null,
    accessJwt:              null,
    refreshJwt:             null,
};

const userAccess = (state = userAccessInit,action) => {
    switch (action.type) {
        case actionType.APP_SHUTDOWN:
            return Object.assign({},userAccessInit);
        case actionType.LOGOUT:
            return Object.assign({},userAccessInit,{
                ethNetwork:             state.ethNetwork,
                ethAddress:             state.ethAddress,
                autoLogin:              (action.payload&&action.payload.autoLogin) ? action.payload.autoLogin : false,
            });
        case actionType.STOP_AUTO_LOGIN:
            return Object.assign({},userAccessInit,{
                autoLogin:              false,
            });
        case actionType.UPDATE_ETH_NETWORK:
            return Object.assign({},state,{
                ethNetwork:             action.payload.ethNetwork,
            });
        case actionType.UPDATE_ETH_ADDRESS:
            return Object.assign({},state,{
                ethAddress:             action.payload.ethAddress,
            });
        case actionType.REFRESH_TOKENS:
            return Object.assign({},state,{
                accessJwt:              action.payload.accessJwt,
                refreshJwt:             action.payload.refreshJwt,
            });
        case actionType.RECEIVE_CHANNELS:
        case actionType.RECEIVE_USER_CHANNELS:
            return Object.assign({},state,{channels:{
                BLOCKCHAIN_ETHEREUM:    action.payload.BLOCKCHAIN_ETHEREUM  ? action.payload.BLOCKCHAIN_ETHEREUM    : state.channels.BLOCKCHAIN_ETHEREUM,
                KEYBOARD:               action.payload.KEYBOARD             ? action.payload.KEYBOARD               : state.channels.KEYBOARD,
                FACEBOOK:               action.payload.FACEBOOK             ? action.payload.FACEBOOK               : state.channels.FACEBOOK,
                LINKEDIN:               action.payload.LINKEDIN             ? action.payload.LINKEDIN               : state.channels.LINKEDIN,
                GOOGLE:                 action.payload.GOOGLE               ? action.payload.GOOGLE                 : state.channels.GOOGLE,
                PAYPAL:                 action.payload.PAYPAL               ? action.payload.PAYPAL                 : state.channels.PAYPAL,
            }});
        case actionType.RECEIVE_LOGIN_CHANNEL:
            return Object.assign({},state,{
                loginChannel:           action.payload.loginChannel,
            });
        case actionType.RECEIVE_PAY_CHANNEL:
            return Object.assign({},state,{
                payChannel:             action.payload.payChannel,
            });
        case actionType.RECEIVE_FACEBOOK_LOGIN_STATUS:
            return Object.assign({},state,{
                facebookStatus:         action.payload.facebookStatus,
                facebookUserId:         action.payload.facebookUserId,
                facebookUserAccessToken:action.payload.facebookUserAccessToken,
            });
        case actionType.RECEIVE_LINKEDIN_WINDOW_AND_LISTENER:
            return Object.assign({},state,{
                linkedInWindow:         action.payload.linkedInWindow,
                linkedInListener:       action.payload.linkedInListener,
            });
        case actionType.CLEAR_LINKEDIN_WINDOW_AND_LISTENER:
            return Object.assign({},state,{
                linkedInWindow:         null,
                linkedInListener:       null,
            });
        case actionType.RECEIVE_LINKEDIN_LOGIN:
            return Object.assign({},state,{
                linkedInCode:           action.payload.code,
                linkedInState:          action.payload.state,
            });
        case actionType.RECEIVE_GOOGLE_WINDOW_AND_LISTENER:
            return Object.assign({},state,{
                googleWindow:           action.payload.googleWindow,
                googleListener:         action.payload.googleListener,
            });
        case actionType.CLEAR_GOOGLE_WINDOW_AND_LISTENER:
            return Object.assign({},state,{
                googleWindow:           null,
                googleListener:         null,
            });
        case actionType.RECEIVE_GOOGLE_LOGIN:
            return Object.assign({},state,{
                googleCode:             action.payload.code,
            });
        case actionType.LOGIN:
            return Object.assign({},state,{
                loggedIn:               true,
                autoLogin:              true,
                accessJwt:              action.payload.accessJwt,
                refreshJwt:             action.payload.refreshJwt,
                payChannel:             action.payload.payChannel,
            });
        default:
            return state;
    }
};

export default userAccess;
