import actionType from "../config/actionTypes";
import userOptions from "../../actions/config/user";

const userInit = {
    id: -1,
    role: -1,
    deactivated: 1,
    emailVerified: 0,
    identityCertified: 0,
    incomeApproved: 0,
    name: null,
    surname: null,
    email: null,
    passport: null,
    optionKeyboardMode: null,
    optionLoginCreate: userOptions.optionLoginCreate.LOGIN,
    optionUserMenu: userOptions.optionUserMenu.ADD,
    optionAdvancedMode: false,
    optionViewHistory: false,
};

const user = (state = userInit,action) => {
    switch (action.type) {
        case actionType.APP_SHUTDOWN:
        case actionType.LOGOUT:
            return Object.assign({},userInit);
        case actionType.LOGIN:
            return Object.assign({},state,{
                id:                     parseInt(action.payload.userId),
                role:                   parseInt(action.payload.userRole),
                optionKeyboardMode:     null,
            });
        case actionType.RECEIVE_USER_FLAGS:
            return Object.assign({},state,{
                deactivated:            parseInt(action.payload.deactivated)        === state.deactivated       ? state.deactivated         : parseInt(action.payload.deactivated),
                emailVerified:          parseInt(action.payload.emailVerified)      === state.emailVerified     ? state.emailVerified       : parseInt(action.payload.emailVerified),
                identityCertified:      parseInt(action.payload.identityCertified)  === state.identityCertified ? state.identityCertified   : parseInt(action.payload.identityCertified),
                incomeApproved:         parseInt(action.payload.incomeApproved)     === state.incomeApproved    ? state.incomeApproved      : parseInt(action.payload.incomeApproved),
            });
        case actionType.UPDATE_USER_ACTIVATION:
            return Object.assign({},state, {
                deactivated:            parseInt(action.payload.deactivated),
            });
        case actionType.RECEIVE_USER_DETAILS:
            return Object.assign({},state,{
                name:                   action.payload.name         ? action.payload.name       : state.name,
                surname:                action.payload.surname      ? action.payload.surname    : state.surname,
                email:                  action.payload.email        ? action.payload.email      : state.email,
                passport:               action.payload.passport     ? action.payload.passport   : state.passport,
            });
        case actionType.DELETE_USER_DETAILS:
            return Object.assign({},state,{
                name:                   null,
                surname:                null,
                email:                  null,
                passport:               null,
            });
        case actionType.ABANDON_KEYBOARD:
            return Object.assign({},state,{
                optionKeyboardMode:     null,
            });
        case actionType.CHOOSE_KEYBOARD:
            return Object.assign({},state,{
                optionKeyboardMode:     action.payload.optionKeyboardMode ? action.payload.optionKeyboardMode : state.optionLoginCreate,
            });
        case actionType.SWITCH_OPTION_LOGIN_CREATE:
            return Object.assign({},state,{
                optionLoginCreate:      (state.optionLoginCreate===userOptions.optionLoginCreate.LOGIN)?userOptions.optionLoginCreate.CREATE:userOptions.optionLoginCreate.LOGIN,
                optionKeyboardMode:     state.optionKeyboardMode?((state.optionLoginCreate===userOptions.optionLoginCreate.LOGIN)?userOptions.optionLoginCreate.CREATE:userOptions.optionLoginCreate.LOGIN):null,
            });
        case actionType.SWITCH_OPTION_USER_MENU:
            return Object.assign({},state,{
                optionUserMenu:         action.payload.optionUserMenu,
            });
        case actionType.SET_OPTION_ADVANCED_MODE:
            return Object.assign({},state,{
                optionAdvancedMode:     action.payload.optionAdvancedMode,
                optionViewHistory:      action.payload.optionAdvancedMode ? action.payload.optionViewHistory : false,
            });
        case actionType.SET_OPTION_VIEW_HISTORY:
            return Object.assign({},state,{
                optionViewHistory:      action.payload.optionViewHistory,
            });
        default:
            return state;
    }
};

export default user;
