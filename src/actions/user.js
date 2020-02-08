import {processRequest} from "./server";
import {emitFlare} from "./flare";
import {logout} from "./auth";
import {flareBook} from "./config/flare";
import {requestType} from "./config/http";
import actionType,{busyPayload} from "../reducers/config/actionTypes";
import {endpoint} from "./config/server";

export const switchOptionUserMenu = (optionUserMenu) => async (dispatch,getState) => {
    return dispatch({type:actionType.SWITCH_OPTION_USER_MENU,payload:{optionUserMenu}});
};

export const fetchDetails = () => async (dispatch,getState) => {
    let details = {};
    return await Promise.resolve()
        .then   (()               => dispatch(processRequest(requestType.GET,endpoint.USER_DETAILS_FETCH,null)))
        .then   (result           => result.map((detail,i) => details[detail.detailName]=detail.detailValue))
        .then   (()               => dispatch({type:actionType.RECEIVE_USER_DETAILS,payload:details}))
        .catch  (error            => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.errorFlare.ERR_USER_DETAILS)));
};

export const deleteDetails = () => async (dispatch,getState) => {
    return await Promise.resolve()
        .then   (()               => dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_ACTION_USERDETAILS}))
        .then   (()               => dispatch(processRequest(requestType.POST,endpoint.USER_DETAILS_DELETE,null)))
        .then   (()               => dispatch({type:actionType.DELETE_USER_DETAILS,payload:{}}))
        .catch  (error            => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.errorFlare.ERR_USER_DETAILS)))
        .finally(()               => dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_ACTION_USERDETAILS}));
};

export const storeDetails = (userDetails,overwrite) => async (dispatch,getState) => {
    return await Promise.resolve()
        .then   (()               => dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_ACTION_USERDETAILS}))
        .then   (()               => dispatch(processRequest(requestType.POST,endpoint.USER_DETAILS_STORE,Object.assign({},{userDetails},overwrite))))
        .then   (()               => dispatch(fetchDetails()))
        .catch  (error            => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.errorFlare.ERR_USER_DETAILS)))
        .finally(()               => dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_ACTION_USERDETAILS}));
};

export const activateUser = () => async (dispatch,getState) => {
    dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_ACTION_ACTIVATEUSER});
    processRequest(requestType.POST,endpoint.USER_ACTIVATE,null)(dispatch,getState)
        .then(result => {
            dispatch({type:actionType.UPDATE_USER_ACTIVATION,payload:{deactivated:0}});
        })
        .catch(error => dispatch(emitFlare(flareBook.flareType.ERROR,error)))
        .then(() => dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_ACTION_ACTIVATEUSER}));
};

export const deactivateUser = () => async (dispatch,getState) => {
    dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_ACTION_ACTIVATEUSER});
    dispatch({type:actionType.CLEAR_POPULATION,payload:{}});
    processRequest(requestType.POST,endpoint.USER_DEACTIVATE,null)(dispatch,getState)
        .then(result => {
            dispatch({type:actionType.UPDATE_USER_ACTIVATION,payload:{deactivated:1}});
        })
        .catch(error => dispatch(emitFlare(flareBook.flareType.ERROR,error)))
        .finally(() => dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_ACTION_ACTIVATEUSER}));
};

export const close = () => async (dispatch,getState) => {
    return await Promise.resolve()
        .then   (()             => dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_COMPONENT_AUTH}))
        .then   (()             => dispatch(processRequest(requestType.POST,endpoint.USER_CLOSE,{})))
        .then   (()             => dispatch(logout({autoLogin:false})))
        .catch  (error          => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.errorFlare.ERR_ACCOUNT_CLOSE)))
        .finally(()             => dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_COMPONENT_AUTH}));
};