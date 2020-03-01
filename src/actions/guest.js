import {processRequest} from "./server";
import {requestType} from "../config/http";
import {endpoint} from "../config/server";
import flareBook from "../config/flare";
import actionType from "../reducers/config/actionTypes";

export const guestSubscribeNewsletter = guestEmail => async (dispatch,getState) => {
    return Promise.resolve()
        .then   (()               => dispatch(processRequest(requestType.POST,endpoint.GUEST_SUBSCRIBENEWSLETTER,{guestEmail})))
        .then   (()               => dispatch({type:actionType.SET_GUEST_SUBSCRIBED,payload:{guestSubscribed:true}}))
        .catch  (()               => {throw flareBook.infoFlare.CANNOT_SUBSCRIBE_NEWSLETTER;});
};