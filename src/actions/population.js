import {processRequest} from "./server";
import {startMemberWorker,stopMemberWorker} from "./member";
import {emitFlare} from "./flare";
import {startMarketWorker,stopMarketWorker} from "./market";
import flareBook from "../config/flare";
import {requestType} from "../config/http";
import actionType, {busyPayload} from "../reducers/config/actionTypes";
import {endpoint} from "../config/server";
import {INTERVAL_POPULATION_WORKER} from "../env/workers";

export const fetchPopulations = () => async (dispatch,getState) => {
    let populations;
    return Promise.resolve()
        .then   (()             => dispatch({type:actionType.SET_BUSY,payload:busyPayload.BUSY_ACTION_POPULATIONS}))
        .then   (()             => dispatch(processRequest(requestType.GET,endpoint.POPULATION_FORUSER,null)))
        .then   (p              => populations=p)
        .then   (()             => populations.forEach(population => {if (population.isMember) {
            dispatch(selectPopulation(population));
            dispatch(startPopulationWorker());
            dispatch(startMemberWorker());
            dispatch(startMarketWorker());
        }}))
        .then   (()             => dispatch({type:actionType.RECEIVE_POPULATIONS,payload:{populations}}))
        .catch  (error          => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)))
        .finally(()         => dispatch({type:actionType.SET_NOT_BUSY,payload:busyPayload.BUSY_ACTION_POPULATIONS}));
};

export const selectPopulation = population => async (dispatch,getState) => {
    dispatch({type:actionType.SELECT_POPULATION,payload:{population}});
};

export const deselectPopulation = () => async (dispatch,getState) => {
    dispatch(stopMemberWorker());
    dispatch(stopPopulationWorker());
    dispatch(stopMarketWorker());
    dispatch({type:actionType.CLEAR_POPULATION,payload:{}});
};

export const startPopulationWorker = () => async (dispatch,getState) => {
    let populationWorker = setInterval((() => {
        const activity = () => {
            dispatch(fetchThrubiPriceSilver(getState().client.population.id));
            dispatch(fetchThrubiPriceSilverNext(getState().client.population.id));
            if (getState().client.user.auth) {
                dispatch(fetchStats(getState().client.population.id));
                dispatch(fetchConfig(getState().client.population.id));
            }
        };
        activity();
        return activity;
    })(),INTERVAL_POPULATION_WORKER);
    dispatch({type:actionType.RECEIVE_POPULATION_WORKER,payload:{populationWorker}});
};

export const stopPopulationWorker = () => async (dispatch,getState) => {
    clearInterval(getState().session.workers.population);
    dispatch({type:actionType.STOP_POPULATION_WORKER,payload:{}});
};

const fetchThrubiPriceSilver = populationId => async (dispatch,getState) => {
    return Promise.resolve()
        .then   (()             => dispatch(processRequest(requestType.GET,endpoint.POPULATION_THRUBIPRICE_SILVER+"/"+populationId,null)))
        .then   (result         => dispatch({type:actionType.RECEIVE_THRUBI_PRICE_SILVER,payload:{thrubiPriceSilver:parseFloat(result.thrubiPriceSilver)}}))
        .catch  (error          => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)));
};

const fetchThrubiPriceSilverNext = populationId => async (dispatch,getState) => {
    return Promise.resolve()
        .then   (()             => dispatch(processRequest(requestType.GET,endpoint.POPULATION_THRUBIPRICE_SILVER_NEXT+"/"+populationId,null)))
        .then   (result         => dispatch({type:actionType.RECEIVE_THRUBI_PRICE_SILVER_NEXT,payload:{thrubiPriceSilverNext:parseFloat(result.thrubiPriceSilverNext)}}))
        .catch  (error          => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)));
};

const fetchStats = populationId => async (dispatch,getState) => {
    return Promise.resolve()
        .then   (()             => dispatch(processRequest(requestType.GET,endpoint.POPULATION_STATS_READ+"/"+populationId,null)))
        .then   (stats          => dispatch({type:actionType.RECEIVE_STATS,payload:{stats}}))
        .catch  (error          => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)));
};

const fetchConfig = populationId => async (dispatch,getState) => {
    return Promise.resolve()
        .then   (()             => dispatch(processRequest(requestType.GET,endpoint.POPULATION_CONFIG_READ+"/"+populationId,null)))
        .then   (config         => dispatch({type:actionType.RECEIVE_CONFIG,payload:{config}}))
        .catch  (error          => dispatch(emitFlare(flareBook.flareType.ERROR,flareBook.flareType.ERR_GENERIC_USERMENU)));
};

export const changeCountryFilter = countryFilter => async (dispatch,getState) => {
    return Promise.resolve()
        .then   (()             => dispatch({type:actionType.RECEIVE_COUNTRY_FILTER,payload:{countryFilter}}));
};