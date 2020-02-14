import {processRequest} from "./server";
import {emitFlare} from "./flare";
import {logout} from "./auth";
import {activationState,detailName,flagFlare,userFlags} from "./config/user";
import flareBook from "./config/flare";
import {requestType} from "./config/http";
import actionType, {busyPayload} from "../reducers/config/actionTypes";
import {endpoint} from "./config/server";
import {INTERVAL_USER_WORKER} from "./env/workers";

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

export const uploadDocument = () => async (dispatch,getState) => {
    return await Promise.resolve()
        .then   (()               => dispatch(storeDetails({[detailName.submittedDocument]:true},{overwrite:true})))
        .then   (()               => dispatch(processRequest(requestType.POST,endpoint.USER_CERTIFY,{})));
};

const flareUserFlags = flags => async (dispatch,getState) => {
    Object.keys(userFlags).map(async flag => {
            if ((getState().client.user[flag])&&(flags[flag]!==getState().client.user[flag]))
                return await dispatch(emitFlare(flareBook.flareType.INFO,flagFlare(flags[flag],flag)));
        }
    );
};

export const activateUserWorker = () => async (dispatch,getState) => {
    let userWorker = setInterval((() => {
        let userFlags;
        const activity = () => {
            return Promise.resolve()
                .then (()         => dispatch(processRequest(requestType.GET,endpoint.USER_GETFLAGS,null)))
                .then (flags      => userFlags=flags)
                .then (()         => dispatch(flareUserFlags(userFlags)))
                .then (()         => dispatch({type:actionType.RECEIVE_USER_FLAGS,payload:userFlags}))
                .catch(error      => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.errorFlare.ERR_USER_FLAGS)));
        };
        activity();
        return activity;
    })(),INTERVAL_USER_WORKER);
    dispatch({type:actionType.RECEIVE_USER_WORKER,payload:{userWorker}});
};

export const stopUserWorker = () => async (dispatch,getState) => {
    clearInterval(getState().session.workers.user);
    dispatch({type:actionType.STOP_USER_WORKER,payload:{}});
};

export const activateUser = () => async (dispatch,getState) => {
    return await Promise.resolve()
        .then   (()              => dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_ACTION_ACTIVATEUSER}))
        .then   (()              => dispatch({type:actionType.CLEAR_POPULATION,payload:{}}))
        .then   (()              => dispatch(processRequest(requestType.POST,endpoint.USER_ACTIVATE,null)))
        .then   (()              => dispatch({type:actionType.SET_USER_ACTIVATED,payload:{}}))
        .catch  (error           => {throw flareBook.flareFallback(error,flareBook.errorFlare.USER_ACTIVATION);})
        .finally(()              => dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_ACTION_ACTIVATEUSER}));
};

export const deactivateUser = () => async (dispatch,getState) => {
    return await Promise.resolve()
        .then   (()              => dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_ACTION_ACTIVATEUSER}))
        .then   (()              => dispatch({type:actionType.CLEAR_POPULATION,payload:{}}))
        .then   (()              => dispatch(processRequest(requestType.POST,endpoint.USER_DEACTIVATE,{activationState:activationState.userRequestDeactivated})))
        .then   (()              => dispatch({type:actionType.SET_USER_DEACTIVATED,payload:{}}))
        .catch  (error           => {throw flareBook.flareFallback(error,flareBook.errorFlare.USER_ACTIVATION);})
        .finally(()              => dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_ACTION_ACTIVATEUSER}));
};

export const declareIncome = mDeclared => async (dispatch,getState) => {
    return Promise.resolve()
        .then  (() => dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_ACTION_DECLAREINCOME}))
        .then  (() => dispatch(processRequest(requestType.POST,endpoint.MEMBER_REQUEST_DECLAREINCOME+"/"+getState().client.population.id+"/"+mDeclared,null)))
        .catch (error => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)))
        .finally(() => dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_ACTION_DECLAREINCOME}));
};

export const close = () => async (dispatch,getState) => {
    return await Promise.resolve()
        .then   (()             => dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_COMPONENT_AUTH}))
        .then   (()             => dispatch(processRequest(requestType.POST,endpoint.USER_CLOSE,{})))
        .then   (()             => dispatch(logout({autoLogin:false})))
        .catch  (error          => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.errorFlare.ERR_ACCOUNT_CLOSE)))
        .finally(()              => dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_COMPONENT_AUTH}));
};