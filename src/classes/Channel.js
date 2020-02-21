class Channel {
    static channelIsOpen          (channelMode) {return channelMode>0;}
    static channelIsForLogin      (channelMode) {return  Math.abs(channelMode)     %2;} //last bit
    static channelIsForPay        (channelMode) {return (Math.abs(channelMode)>>1) %2;} //second-to-last bit

    static channelName = {
        BLOCKCHAIN_ETHEREUM:    "BLOCKCHAIN_ETHEREUM",
        KEYBOARD:               "KEYBOARD",
        FACEBOOK:               "FACEBOOK",
        LINKEDIN:               "LINKEDIN",
        GOOGLE:                 "GOOGLE",
        PAYPAL:                 "PAYPAL",
        TWITTER:                "TWITTER",
};
    
    static channelColor(channelName) {
        switch (channelName) {
            case Channel.channelName.BLOCKCHAIN_ETHEREUM:   return "blockchain-ethereum";
            case Channel.channelName.KEYBOARD:              return "keyboard";
            case Channel.channelName.FACEBOOK:              return "facebook";
            case Channel.channelName.LINKEDIN:              return "linkedin";
            case Channel.channelName.GOOGLE:                return "google";
            case Channel.channelName.PAYPAL:                return "paypal";
            case Channel.channelName.TWITTER:               return "twitter";
            default:                                        return "";
        }
    }

    static channelAuthFunctionName(channelName) {
        switch (channelName) {
            case Channel.channelName.BLOCKCHAIN_ETHEREUM:   return "BlockchainEthereum";
            case Channel.channelName.KEYBOARD:              return "Keyboard";
            case Channel.channelName.FACEBOOK:              return "Facebook";
            case Channel.channelName.LINKEDIN:              return "LinkedIn";
            case Channel.channelName.GOOGLE:                return "Google";
            case Channel.channelName.PAYPAL:                return "PayPal";
            case Channel.channelName.TWITTER:               return "Twitter";
            default:                                        return "";
        }
    }

    static keyboardChannelMessage(optionKeyboardMode) {
        switch (optionKeyboardMode) {
            case "LOGIN":   return "Sign in with username/password";
            case "CREATE":  return "Create a new Thrubi account with username/password";
            case "ADD":     return "Add username/password credentials to my account";
            case "UPDATE":  return "Update my username/password credentials";
            default:        return "";
        }
    }

    static channelUserFriendlyName(channelName,actionType) {
        switch (actionType) {
            case "USE": switch (channelName) {
                case Channel.channelName.BLOCKCHAIN_ETHEREUM:   return "Use my Ethereum wallet";
                case Channel.channelName.PAYPAL:                return "Use my PayPal account";
                default:                                        return "";
            }
            case "USING": switch (channelName) {
                case Channel.channelName.BLOCKCHAIN_ETHEREUM:   return "Using my Ethereum wallet";
                case Channel.channelName.PAYPAL:                return "Using my PayPal account";
                default:                                        return "";
            }
            case "LINK": switch (channelName) {
                case Channel.channelName.BLOCKCHAIN_ETHEREUM:   return "Connect an Ethereum wallet to use it";
                case Channel.channelName.PAYPAL:                return "Connect a PayPal account to use it";
                default:                                        return "";
            }
            case "LOGIN": switch (channelName) {
                case Channel.channelName.BLOCKCHAIN_ETHEREUM:   return "Sign in with Ethereum wallet";
                case Channel.channelName.KEYBOARD:              return "Sign in with username/password";
                case Channel.channelName.FACEBOOK:              return "Sign in with Facebook";
                case Channel.channelName.LINKEDIN:              return "Sign in with LinkedIn";
                case Channel.channelName.GOOGLE:                return "Sign in with Google";
                case Channel.channelName.TWITTER:               return "Sign in with Twitter";
                default:                                        return "";
            }
            case "CREATE": switch (channelName) {
                case Channel.channelName.BLOCKCHAIN_ETHEREUM:   return "Sign up with Ethereum wallet";
                case Channel.channelName.KEYBOARD:              return "Sign up with username/password";
                case Channel.channelName.FACEBOOK:              return "Sign up with Facebook";
                case Channel.channelName.LINKEDIN:              return "Sign up with LinkedIn";
                case Channel.channelName.GOOGLE:                return "Sign up with Google";
                case Channel.channelName.TWITTER:               return "Sign up with Twitter";
                default:                                        return "";
            }
            case "ADD": switch (channelName) {
                case Channel.channelName.BLOCKCHAIN_ETHEREUM:   return "Connect an Ethereum wallet";
                case Channel.channelName.KEYBOARD:              return "Enable username/password";
                case Channel.channelName.FACEBOOK:              return "Connect a Facebook account";
                case Channel.channelName.LINKEDIN:              return "Connect a LinkedIn account";
                case Channel.channelName.GOOGLE:                return "Connect a Google account";
                case Channel.channelName.PAYPAL:                return "Connect a PayPal account";
                case Channel.channelName.TWITTER:               return "Connect a Twitter account";
                default:                                        return "";
            }
            case "DELETE": switch (channelName) {
                case Channel.channelName.BLOCKCHAIN_ETHEREUM:   return "Disconnect my Ethereum wallet";
                case Channel.channelName.KEYBOARD:              return "Disable username/password";
                case Channel.channelName.FACEBOOK:              return "Disconnect my Facebook account";
                case Channel.channelName.LINKEDIN:              return "Disconnect my LinkedIn account";
                case Channel.channelName.GOOGLE:                return "Disconnect my Google account";
                case Channel.channelName.PAYPAL:                return "Disconnect my PayPal account";
                case Channel.channelName.TWITTER:               return "Disconnect my Twitter account";
                default:                                        return "";
            }
            case "UPDATE": switch (channelName) {
                case Channel.channelName.BLOCKCHAIN_ETHEREUM:   return "Connect another Ethereum wallet";
                case Channel.channelName.KEYBOARD:              return "Update username/password";
                case Channel.channelName.FACEBOOK:              return "Connect another Facebook account";
                case Channel.channelName.LINKEDIN:              return "Connect another LinkedIn account";
                case Channel.channelName.GOOGLE:                return "Connect another Google account";
                case Channel.channelName.PAYPAL:                return "Connect another PayPal account";
                case Channel.channelName.TWITTER:               return "Connect another Twitter account";
                default:                                        return "";
            }
            default: return "";
        }
    }
}

export default Channel;