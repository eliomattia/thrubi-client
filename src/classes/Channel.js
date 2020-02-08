class Channel {
    static channelIsOpen          (channelMode) {return channelMode>0;}
    static channelIsForLogin      (channelMode) {return  Math.abs(channelMode)     %2;} //last bit
    static channelIsForPay        (channelMode) {return (Math.abs(channelMode)>>1) %2;} //second-to-last bit

    static channelColor (channelName) {
        switch (channelName) {
            case "BLOCKCHAIN_ETHEREUM": return "blockchain-ethereum";
            case "KEYBOARD":            return "keyboard";
            case "FACEBOOK":            return "facebook";
            case "LINKEDIN":            return "linkedin";
            case "GOOGLE":              return "google";
            case "PAYPAL":              return "paypal";
            default:                    return "";
        }
    }

    static channelAuthFunctionName (channelName) {
        switch (channelName) {
            case "BLOCKCHAIN_ETHEREUM": return "BlockchainEthereum";
            case "KEYBOARD":            return "Keyboard";
            case "FACEBOOK":            return "Facebook";
            case "LINKEDIN":            return "LinkedIn";
            case "GOOGLE":              return "Google";
            default:                    return "";
        }
    }

    static keyboardChannelMessage(optionKeyboardMode) {
        switch (optionKeyboardMode) {
            case "LOGIN":   return "Sign in with username/password";
            case "CREATE":  return "Create a new Thrubi account with username/password";
            case "ADD":     return "Add username/password credentials to my account";
            case "UPDATE":  return "Update my username/password credentials";
            default: return "";
        }
    }

    static channelUserFriendlyName (channelName,actionType) {
        switch (actionType) {
            case "USE": switch (channelName) {
                case "BLOCKCHAIN_ETHEREUM": return "Use my Ethereum wallet";
                case "PAYPAL":              return "Use my PayPal account";
                default:                    return "";
            }
            case "USING": switch (channelName) {
                case "BLOCKCHAIN_ETHEREUM": return "Using my Ethereum wallet";
                case "PAYPAL":              return "Using my PayPal account";
                default:                    return "";
            }
            case "LINK": switch (channelName) {
                case "BLOCKCHAIN_ETHEREUM": return "Connect an Ethereum wallet to use it";
                case "PAYPAL":              return "Connect a PayPal account to use it";
                default:                    return "";
            }
            case "LOGIN": switch (channelName) {
                case "BLOCKCHAIN_ETHEREUM": return "Sign in with Ethereum wallet";
                case "KEYBOARD":            return "Sign in with username/password";
                case "FACEBOOK":            return "Sign in with Facebook";
                case "LINKEDIN":            return "Sign in with LinkedIn";
                case "GOOGLE":              return "Sign in with Google";
                default:                    return "";
            }
            case "CREATE": switch (channelName) {
                case "BLOCKCHAIN_ETHEREUM": return "Sign up with Ethereum wallet";
                case "KEYBOARD":            return "Sign up with username/password";
                case "FACEBOOK":            return "Sign up with Facebook";
                case "LINKEDIN":            return "Sign up with LinkedIn";
                case "GOOGLE":              return "Sign up with Google";
                default:                    return "";
            }
            case "ADD": switch (channelName) {
                case "BLOCKCHAIN_ETHEREUM": return "Connect an Ethereum wallet";
                case "KEYBOARD":            return "Enable credentials (username/password)";
                case "FACEBOOK":            return "Connect a Facebook account";
                case "LINKEDIN":            return "Connect a LinkedIn account";
                case "GOOGLE":              return "Connect a Google account";
                case "PAYPAL":              return "Connect a PayPal account";
                default:                    return "";
            }
            case "DELETE": switch (channelName) {
                case "BLOCKCHAIN_ETHEREUM": return "Disable access via my Ethereum wallet";
                case "KEYBOARD":            return "Disable credentials (username/password)";
                case "FACEBOOK":            return "Disconnect my Facebook account";
                case "LINKEDIN":            return "Disconnect my LinkedIn account";
                case "GOOGLE":              return "Disconnect my Google account";
                case "PAYPAL":              return "Disconnect my PayPal account";
                default:                    return "";
            }
            case "UPDATE": switch (channelName) {
                case "BLOCKCHAIN_ETHEREUM": return "Connect another Ethereum wallet";
                case "KEYBOARD":            return "Update username/password";
                case "FACEBOOK":            return "Connect another Facebook account";
                case "LINKEDIN":            return "Connect another LinkedIn account";
                case "GOOGLE":              return "Connect another Google account";
                case "PAYPAL":              return "Connect another PayPal account";
                default:                    return "";
            }
            default: return ""
        }
    }
}

export default Channel;