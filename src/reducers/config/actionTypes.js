let actionType = {
    APP_SHUTDOWN: null,
    LOGOUT: null,
    SET_GUEST_SUBSCRIBED: null,
    RECEIVE_GUEST_MENU_OPTION: null,
    TOGGLE_FAQ_STATE: null,
    STOP_AUTO_LOGIN: null,
    UPDATE_ETH_NETWORK: null,
    UPDATE_ETH_ADDRESS: null,
    REFRESH_TOKENS: null,
    RECEIVE_CHANNELS: null,
    RECEIVE_USER_CHANNELS: null,
    RECEIVE_LOGIN_CHANNEL: null,
    RECEIVE_PAY_CHANNEL: null,
    RECEIVE_RECEIVE_CHANNEL: null,
    RECEIVE_FACEBOOK_LOGIN_STATUS: null,
    RECEIVE_LINKEDIN_WINDOW_AND_LISTENER: null,
    CLEAR_LINKEDIN_WINDOW_AND_LISTENER: null,
    RECEIVE_LINKEDIN_LOGIN: null,
    RECEIVE_GOOGLE_WINDOW_AND_LISTENER: null,
    CLEAR_GOOGLE_WINDOW_AND_LISTENER: null,
    RECEIVE_GOOGLE_LOGIN: null,
    RECEIVE_TWITTER_WINDOW_AND_LISTENER: null,
    CLEAR_TWITTER_WINDOW_AND_LISTENER: null,
    RECEIVE_TWITTER_LOGIN: null,
    LOGIN: null,
    RECEIVE_USER_FLAGS: null,
    SET_USER_ACTIVATED: null,
    SET_USER_DEACTIVATED: null,
    RECEIVE_USER_DETAILS: null,
    DELETE_USER_DETAILS: null,
    DELETE_PROFILE_PICTURE: null,
    ABANDON_KEYBOARD: null,
    CHOOSE_KEYBOARD: null,
    SWITCH_OPTION_LOGIN_CREATE: null,
    SWITCH_OPTION_USER_MENU: null,
    SET_OPTION_ADVANCED_MODE: null,
    SET_OPTION_VIEW_HISTORY: null,
    CHANGE_POPULATION: null,
    RECEIVE_POPULATIONS: null,
    CLEAR_POPULATION: null,
    SELECT_POPULATION: null,
    POPULATION_EXISTS: null,
    RECEIVE_THRUBI_PRICE_SILVER: null,
    RECEIVE_THRUBI_PRICE_SILVER_NEXT: null,
    RECEIVE_STATS: null,
    RECEIVE_CONFIG: null,
    CLEAR_MEMBER: null,
    RECEIVE_MEMBER: null,
    RECEIVE_CCYS: null,
    SELECT_CCY: null,
    DESELECT_CCY: null,
    RECEIVE_COUNTRIES: null,
    SELECT_COUNTRY: null,
    RECEIVE_POPULATION_FILTER: null,
    DESELECT_COUNTRY: null,
    RECEIVE_EXRATE: null,
    RECEIVE_GLOBAL_STATS: null,
    RECEIVE_THRUBI_CONTRACT: null,
    SET_BUSY: null,
    SET_NOT_BUSY: null,
    INCREASE_FLARE_NEXT: null,
    EMIT_FLARE: null,
    DELETE_FLARE: null,
    REFRESH_FLARE_TIMEOUT: null,
    RECEIVE_ETH_NETWORK_WORKER: null,
    RECEIVE_ETH_ADDRESS_WORKER: null,
    RECEIVE_REFRESH_TOKENS_WORKER: null,
    RECEIVE_GLOBAL_STATS_WORKER: null,
    RECEIVE_USER_WORKER: null,
    RECEIVE_MEMBER_WORKER: null,
    RECEIVE_MARKET_WORKER: null,
    RECEIVE_POPULATION_WORKER: null,
    STOP_ETH_NETWORK_WORKER: null,
    STOP_ETH_ADDRESS_WORKER: null,
    STOP_REFRESH_TOKENS_WORKER: null,
    STOP_GLOBAL_STATS_WORKER: null,
    STOP_USER_WORKER: null,
    STOP_MEMBER_WORKER: null,
    STOP_MARKET_WORKER: null,
    STOP_POPULATION_WORKER: null,
};

Object.keys(actionType).map(key => actionType[key]=key);

export const busyPayload =  {
    BUSY_COMPONENT_APP:             {busyType:"component",busyId:"app"},
    BUSY_COMPONENT_TITLEBAR:        {busyType:"component",busyId:"titlebar"},
    BUSY_COMPONENT_VIEWPORT:        {busyType:"component",busyId:"viewport"},
    BUSY_COMPONENT_DASHBOARD:       {busyType:"component",busyId:"dashboard"},
    BUSY_COMPONENT_CLIENT:          {busyType:"component",busyId:"client"},
    BUSY_COMPONENT_AUTH:            {busyType:"component",busyId:"auth"},
    BUSY_COMPONENT_USER:            {busyType:"component",busyId:"user"},
    BUSY_COMPONENT_CLAIM:           {busyType:"component",busyId:"claim"},
    BUSY_COMPONENT_TRANSFORM:       {busyType:"component",busyId:"transform"},
    BUSY_COMPONENT_USERMENU:        {busyType:"component",busyId:"userMenu"},
    BUSY_COMPONENT_ADMINMENU:       {busyType:"component",busyId:"adminMenu"},
    BUSY_ACTION_FETCHPOPULATIONS:   {busyType:"action",busyId:"fetchPopulations"},
    BUSY_ACTION_ACTIVATION:         {busyType:"action",busyId:"activation"},
    BUSY_ACTION_CLAIM:              {busyType:"action",busyId:"claim"},
    BUSY_ACTION_TRANSFORM:          {busyType:"action",busyId:"transform"},
    BUSY_ACTION_USERDETAILS:        {busyType:"action",busyId:"userDetails"},
    BUSY_ACTION_ACTIVATEUSER:       {busyType:"action",busyId:"activateUser"},
    BUSY_ACTION_DECLAREINCOME:      {busyType:"action",busyId:"declareIncome"},
    BUSY_ACTION_POPULATIONS:        {busyType:"action",busyId:"populations"},
};

export default actionType;