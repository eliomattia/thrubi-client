import axios from "axios";
import flareBook from "../config/flare";

export const uploadS3 = (signedRequest,picture) => async (dispatch,getState) => {
    const config = {
        headers: {
            "Content-Type":     picture.type,
        },
    };
    return Promise.resolve()
        .then (()       => axios.put(signedRequest,picture,config))
        .then (result   => console.error("axios result: ",result))
        .catch(e       => {console.error("axios error: ",e); throw flareBook.errorFlare.S3_UPLOAD_ERROR;});
};