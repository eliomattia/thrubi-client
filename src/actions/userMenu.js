import {processRequest} from "./server";
import {fetchExrate} from "./market";
import {emitFlare} from "./flare";
import flareBook from "./config/flare";
import {requestType} from "./config/http";
import actionType,{busyPayload} from "../reducers/config/actionTypes";
import {endpoint} from "./config/server";
import {INTERVAL_MARKET_WORKER, INTERVAL_MEMBER_WORKER, INTERVAL_POPULATION_WORKER} from "./config/workers";

export const fetchPopulations = () => async (dispatch,getState) => {
    //dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_ACTION_POPULATIONS});
    if (getState().client.user.id!==-1) {
        processRequest(requestType.GET,endpoint.POPULATION_FORUSER,null)(dispatch,getState)
            .then(populations => {
                dispatch({type:actionType.RECEIVE_POPULATIONS,payload:{populations}});
            })
            .catch(error => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)))
            .finally(() => dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_ACTION_POPULATIONS}));
    }
};

const fetchThrubiPriceSilver = (populationId) => async (dispatch,getState) => {
    return processRequest(requestType.GET,endpoint.POPULATION_THRUBIPRICE_SILVER+"/"+populationId,null)(dispatch,getState)
        .then(result => {
            dispatch({type:actionType.RECEIVE_THRUBI_PRICE_SILVER,payload:{thrubiPriceSilver:parseFloat(result.thrubiPriceSilver)}});
        })
        .catch(error => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)));
};

const fetchThrubiPriceSilverNext = (populationId) => async (dispatch,getState) => {
    return processRequest(requestType.GET,endpoint.POPULATION_THRUBIPRICE_SILVER_NEXT+"/"+populationId,null)(dispatch,getState)
        .then(result => {
            dispatch({type:actionType.RECEIVE_THRUBI_PRICE_SILVER_NEXT,payload:{thrubiPriceSilverNext:parseFloat(result.thrubiPriceSilverNext)}});
        })
        .catch(error => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)));
};

const fetchStats = (populationId) => async (dispatch,getState) => {
    return processRequest(requestType.GET,endpoint.POPULATION_STATS_READ+"/"+populationId,null)(dispatch,getState)
        .then(stats => {
            dispatch({type:actionType.RECEIVE_STATS,payload:{stats}});
        })
        .catch(error => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)));
};

const fetchConfig = (populationId) => async (dispatch,getState) => {
    return processRequest(requestType.GET,endpoint.POPULATION_CONFIG_READ+"/"+populationId,null)(dispatch,getState)
        .then(config => {
            dispatch({type:actionType.RECEIVE_CONFIG,payload:{config}});
        })
        .catch(error => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)));
};

export const changePopulation = () => async (dispatch,getState) => {
    dispatch({type:actionType.CHANGE_POPULATION,payload:{}});
    deselectPopulation()(dispatch,getState);
};

export const selectPopulation = (population) => async (dispatch,getState) => {
    deselectPopulation()(dispatch,getState);
    dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_ACTION_POPULATIONS});
    dispatch({type:actionType.SELECT_POPULATION,payload:{population}});
    let memberWorker = setInterval((() => {
        const activity = () => {
            fetchMember(population.populationId,getState().client.user.id)(dispatch,getState);
        };
        activity();
        return activity;
    })(),INTERVAL_MEMBER_WORKER);
    dispatch({type:actionType.RECEIVE_MEMBER_WORKER,payload:{memberWorker}});
    let marketWorker = setInterval((() => {
        const activity = () => {
            dispatch(fetchExrate(population.ccyId));
        };
        activity();
        return activity;
    })(),INTERVAL_MARKET_WORKER);
    dispatch({type:actionType.RECEIVE_MARKET_WORKER,payload:{marketWorker}});
    let populationWorker = setInterval((() => {
        const activity = () => {
            fetchThrubiPriceSilver(population.populationId)(dispatch,getState);
            fetchThrubiPriceSilverNext(population.populationId)(dispatch,getState);
            if (getState().client.user.auth) {
                fetchStats(population.populationId)(dispatch,getState);
                fetchConfig(population.populationId)(dispatch,getState);
            }
        };
        activity();
        return activity;
    })(),INTERVAL_POPULATION_WORKER);
    dispatch({type:actionType.RECEIVE_POPULATION_WORKER,payload:{populationWorker}});
    dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_ACTION_POPULATIONS});
};

export const deselectPopulation = () => async (dispatch,getState) => {
    clearInterval(getState().session.workers.member);
    dispatch({type:actionType.STOP_MEMBER_WORKER,payload:{}});
    clearInterval(getState().session.workers.market);
    dispatch({type:actionType.STOP_MARKET_WORKER,payload:{}});
    clearInterval(getState().session.workers.population);
    dispatch({type:actionType.STOP_POPULATION_WORKER,payload:{}});
    dispatch({type:actionType.CLEAR_MEMBER,payload:{}});
    dispatch({type:actionType.CLEAR_POPULATION,payload:{}});
};

export const createMember = (population) => async (dispatch,getState) => {
    dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_ACTION_POPULATIONS});
    return await dispatch(processRequest(requestType.POST,endpoint.MEMBER_CREATE+"/"+population.populationId,null))
        .then(() => dispatch(fetchPopulations()))
        .catch(error => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)))
        .then(() => dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_ACTION_POPULATIONS}));
};

export const fetchMember = () => async (dispatch,getState) => {
    if ((getState().client.population.id!==-1)&&(getState().client.user.loggedIn)) {
        return await dispatch(processRequest(requestType.GET,endpoint.MEMBER+"/"+getState().client.population.id,null))
            .then(packet => dispatch({type:actionType.RECEIVE_MEMBER,payload:{member:packet}}))
            .catch(error => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)));
    }
};

export const declareIncome = (mDeclared) => async (dispatch,getState) => {
    dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_ACTION_DECLAREINCOME});
    return await dispatch(processRequest(requestType.POST,endpoint.MEMBER_REQUEST_DECLAREINCOME+"/"+getState().client.population.id+"/"+mDeclared,null))
        .catch(error => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)))
        .then(() => dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_ACTION_DECLAREINCOME}));
};

export const claim = () => async (dispatch, getState) => {
    const ethAddress=getState().client.userAccess.ethAddress;
    const populationId=getState().client.population.id;
    return await dispatch(processRequest(requestType.GET,endpoint.MEMBER_REQUEST_CLAIM+"/"+ethAddress+"/"+populationId, null));
};

export const advancedMode = (optionAdvancedMode) => async (dispatch,getState) => {
    return dispatch({type:actionType.SET_OPTION_ADVANCED_MODE,payload:{optionAdvancedMode}});
};

export const viewHistory = (optionViewHistory) => async (dispatch,getState) => {
    return dispatch({type:actionType.SET_OPTION_VIEW_HISTORY,payload:{optionViewHistory}});
};