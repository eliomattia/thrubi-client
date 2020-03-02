import actionType from "../config/actionTypes";

const guestInit = {
    subscribed:         false,
    faqState:           {},
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
        case actionType.TOGGLE_FAQ_STATE:
            return Object.assign({},state,{faqState:Object.assign({},state.faqState,{
                [action.payload.actionValue]:                     !state.faqState[action.payload.actionValue],
            })});
        default:
            return state;
    }
};

export default guest;
