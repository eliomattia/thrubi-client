import actionType from "../config/actionTypes";

const guestInit = {
    subscribed:         false,
};

const guest = (state = guestInit,action) => {
    switch (action.type) {
        case actionType.APP_SHUTDOWN:
        case actionType.LOGOUT:
            return Object.assign({},guestInit);
        case actionType.SET_GUEST_SUBSCRIBED:
            return Object.assign({},state,{
                subscribed:                     action.payload.guestSubscribed,
            });
        default:
            return state;
    }
};

export default guest;
