import flareBook from "./flare";

const userOptions = {
    optionLoginCreate: {
        LOGIN:  "LOGIN",
        CREATE: "CREATE",
    },
    optionUserMenu: {
        ADD:    "ADD",
        USER:   "USER",
        PAY:    "PAY",
        MANAGE: "MANAGE",
    },
    optionKeyboardMode: {
        ADD:    "ADD",
        UPDATE: "UPDATE",
    },
};

const flags = {
    deactivated:null,
    emailVerified:null,
    identityCertified:null,
    incomeApproved:null,
};

Object.keys(flags).map(key => flags[key]=key);

export const userFlags = flags;

export const flagFlare = (newState,flag) => {
    if (newState) {
        switch (flag) {
            case userFlags.deactivated:         return flareBook.infoFlare.DEACTIVATED_ON;
            case userFlags.emailVerified:       return flareBook.infoFlare.EMAIL_VERIFIED_ON;
            case userFlags.identityCertified:   return flareBook.infoFlare.IDENTITY_CERTIFIED_ON;
            case userFlags.incomeApproved:      return flareBook.infoFlare.INCOME_APPROVED_ON;
            default: return null;
        }
    } else {
        switch (flag) {
            case userFlags.deactivated:         return flareBook.infoFlare.DEACTIVATED_OFF;
            case userFlags.emailVerified:       return flareBook.infoFlare.EMAIL_VERIFIED_OFF;
            case userFlags.identityCertified:   return flareBook.infoFlare.IDENTITY_CERTIFIED_OFF;
            case userFlags.incomeApproved:      return flareBook.infoFlare.INCOME_APPROVED_OFF;
            default: return null;
        }
    }
};

export default userOptions;