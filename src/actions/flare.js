import FlareQueue from "../classes/FlareQueue";
import flareBook,{TIMEOUT_FLARE_DELETE,TIMEOUT_FLARE_DELETE_LONG} from "../config/flare";
import actionType from "../reducers/config/actionTypes";

export const getFlareNext = () => async (dispatch,getState) => {
    let waiterResolve;
    let waiter = new Promise(resolve => waiterResolve=resolve);
    let index = {};
    FlareQueue.addToQueue(() => Promise.resolve()
        .then(()            => index.value = getState().session.flare.next)
        .then(()            => dispatch({type:actionType.INCREASE_FLARE_NEXT,payload:{}}))
        .then(()            => waiterResolve(index.value))
    );
    return waiter;
};

export const emitFlare = (flareType,flare) => async (dispatch,getState) => {
    let index,fallbackFlare,displayMessage,displayDetails;
    return Promise.resolve()
        .then(()            => dispatch(getFlareNext()))
        .then(next          => index = next)
        .then(()            => fallbackFlare = flareBook.flareFallback(flare,flareBook.errorFlare.UNEXPECTED_FLARE))
        .then(()            => displayMessage = fallbackFlare.thrubiFlareId===flareBook.errorFlare.THRUBI_SERVER_ERROR.thrubiFlareId ? fallbackFlare.serverError : fallbackFlare.message)
        .then(()            => JSON.stringify(fallbackFlare.details))
        .then(strDetails    => displayDetails = typeof fallbackFlare.details === "string" ? fallbackFlare.details : strDetails)
        .then(()            => setTimeout(() => dispatch(deleteFlare(index)),TIMEOUT_FLARE_DELETE))
        .then(deleteTimeout => dispatch({type:actionType.EMIT_FLARE,payload:{index,flareType,message:displayMessage,details:displayDetails,deleteTimeout}}));
};

export const deleteFlare = index => async (dispatch,getState) => {
    return Promise.resolve()
        .then(()            => clearTimeout(getState().session.flare.flares[index].deleteTimeout))
        .then(()            => dispatch({type:actionType.DELETE_FLARE,payload:{index}}));
};

export const refreshFlare = (index,long=false) => async (dispatch,getState) => {
    return Promise.resolve()
        .then(()            => clearTimeout(getState().session.flare.flares[index].deleteTimeout))
        .then(()            => setTimeout(() => dispatch(deleteFlare(index)),long?TIMEOUT_FLARE_DELETE_LONG:TIMEOUT_FLARE_DELETE))
        .then(deleteTimeout => dispatch({type:actionType.REFRESH_FLARE_TIMEOUT,payload:{index,deleteTimeout}}));
};