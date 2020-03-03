import {processRequest} from "./server";
import {requestType} from "../config/http";
import {endpoint} from "../config/server";
import flareBook from "../config/flare";
import actionType from "../reducers/config/actionTypes";
import {logAction} from "../actions/log";
import {loggableActionType} from "../config/user";

export const toggleFaq = actionValue => async (dispatch,getState) => {
    return Promise.resolve()
        .then   (()               => {if (!getState().client.guest.faqState[actionValue]) dispatch(logAction(loggableActionType.clickHomeButton,actionValue));})
        .then   (()               => dispatch({type:actionType.TOGGLE_FAQ_STATE,payload:{actionValue}}))
        .catch  (()               => {throw flareBook.infoFlare.CANNOT_TOGGLE_FAQ_STATE;});
};

export const guestSubscribeNewsletter = guestEmail => async (dispatch,getState) => {
    return Promise.resolve()
        .then   (()               => dispatch(processRequest(requestType.POST,endpoint.GUEST_SUBSCRIBENEWSLETTER,{guestEmail})))
        .then   (()               => dispatch({type:actionType.SET_GUEST_SUBSCRIBED,payload:{guestSubscribed:true}}))
        .catch  (()               => {throw flareBook.infoFlare.CANNOT_SUBSCRIBE_NEWSLETTER;});
};