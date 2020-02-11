import request from "request";
import {uri,spotApi} from "./config/market";
import flareBook from "./config/flare";
import actionType from "../reducers/config/actionTypes";

export const fetchExrate = ccyId => async (dispatch,getState) => {
    if (ccyId) {
        return new Promise((resolve,reject) => {
            request.get({url:uri+ccyId+spotApi,json:{}},(error,response) => {
                if (error) {
                    reject(flareBook.errorFlare.EXRATE_FETCH_ERROR);
                } else {
                    let exrate = parseFloat(response.body.data.amount);
                    dispatch({type:actionType.RECEIVE_EXRATE,payload:{exrate}});
                    resolve(exrate);
                }
            });
        });
    }
};