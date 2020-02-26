import axios from "axios";
import FormData from "form-data";
import flareBook from "../config/flare";

export const uploadS3 = (signedRequest,picture) => async (dispatch,getState) => {
    console.error("picture about to be sent: ",picture);
    let data = new FormData();
    data.append(picture.name,picture,picture.name);
    console.error("data: ",data);
    const config = {
        headers: {
            "Content-Length":   picture.length,
            "Content-Type":     picture.type,
        },
    };

    return Promise.resolve()
        .then (()       => axios.put(signedRequest,picture,config))
        .then (result   => console.error("axios result: ",result))
        .catch(e       => {console.error("axios error: ",e); throw flareBook.errorFlare.S3_UPLOAD_ERROR;});
};