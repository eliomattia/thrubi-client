exports.flareBook = {
    flareType: {
        ERROR:      "ERROR",
        WARNING:    "WARNING",
        INFO:       "INFO",
    },
    flareFallback: (flare,fallback) => {
        if (flare && flare.thrubiFlareId) {
            return flare;
        } else {
            fallback.details=flare;
            return fallback;
        }
    },
    errorFlare: {
        UNEXPECTED_FLARE:           {thrubiFlareId:"0009",message:"Flares must have an ID to be dispatched"},
        THRUBI_SERVER_ERROR:        {thrubiFlareId:"0001",message:"Thrubi server returned an error"},
        THRUBI_CONNECTION_FAILED:   {thrubiFlareId:"0002",message:"Thrubi server not available, please check your connection"},
        FAILED_LOGOUT:              {thrubiFlareId:"0003",message:"Unable to logout"},
        FAILED_LOGIN:               {thrubiFlareId:"0008",message:"Login failed"},
        EXRATE_FETCH_ERROR:         {thrubiFlareId:"0010",message:"Failed fetching exchange rate from Coinbase server"},
        FB_NOT_FOUND:               {thrubiFlareId:"0004",message:"Unable to connect to Facebook"},
        ERR_FETCH_GLOBAL_STATS:     {thrubiFlareId:"0011",message:"Error while receiving global stats"},
        ERR_RECEIVE_GLOBAL_STATS:   {thrubiFlareId:"0012",message:"Error while processing global stats"},
        CANNOT_ENABLE_ETHEREUM:     {thrubiFlareId:"0013",message:"Could not enable Ethereum"},
        ERR_USER_DETAILS:           {thrubiFlareId:"0014",message:"Error processing user details"},
        ERR_ACCOUNT_CLOSE:          {thrubiFlareId:"0015",message:"Could not close user account"},
        ERR_GENERIC_USERMENU:       {thrubiFlareId:"0016",message:"Internal: error with an user menu operation"},
        ERR_PAY_CHANNEL_UPDATE:     {thrubiFlareId:"0016",message:"Error updating user pay channel"},
        ERR_USER_CHANNEL_FETCH:     {thrubiFlareId:"0016",message:"Error fetching user channels"},
        ERR_CHANNEL_FETCH:          {thrubiFlareId:"0016",message:"Error fetching channels"},
        CHANNEL_CLOSED:             {thrubiFlareId:"0005",message:"Switching to Add Channel page, channel is not open"},
        MESSAGE_IGNORED:            {thrubiFlareId:"0006",message:"Internal: message from login popup ignored"},
        ERROR_STOP_TOKEN_REFRESH:   {thrubiFlareId:"0007",message:"Internal: error stopping token refresh"},
    },
    infoFlare: {
        DETECTED_ETH_NETWORK_CHANGE:{thrubiFlareId:"I001",message:"Detected Ethereum network change"},
        DETECTED_ETH_ADDRESS_CHANGE:{thrubiFlareId:"I002",message:"Detected Ethereum address change"},
    },
};