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
    if (newState<0) {
        switch (flag) {
            case userFlags.deactivated:         return flareBook.infoFlare.DEACTIVATED_PENDING;
            case userFlags.emailVerified:       return flareBook.infoFlare.EMAIL_VERIFIED_PENDING;
            case userFlags.identityCertified:   return flareBook.infoFlare.IDENTITY_CERTIFIED_PENDING;
            case userFlags.incomeApproved:      return flareBook.infoFlare.INCOME_APPROVED_PENDING;
            default: return null;
        }
    } else {
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
    }
};

export const activationState = {
    activated:              0,
    userRequestDeactivated: 1,
};


export const detailName = {
    name:               "name",
    surname:            "surname",
    email:              "email",
    document:           "document",
    submittedDocument:  "submittedDocument",
};

export default userOptions;