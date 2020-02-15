let envLinkedInRedirectUri;
let envGoogleRedirectUri;

if (process.env.NODE_ENV === "production") {
    envLinkedInRedirectUri    = "https://eliomattia.github.io/thrubi-client";
    envGoogleRedirectUri      = "https://eliomattia.github.io/thrubi-client";
} else {
    envLinkedInRedirectUri    = "https://localhost:3000";
    envGoogleRedirectUri      = "https://localhost:3000";
}

export const linkedInRedirectUri    = envLinkedInRedirectUri;
export const linkedInAppState       = "ec178df0ec26b9584b3702c8ee98071f76f40b11121c19ff18f674b16169a9e95fee8b82a6334152ba70565c41cf0d1a0b33ff9dda5298a34ce271008e8c09f7";
export const linkedInAppClientId    = "78w03u1p8bc928";

export const googleRedirectUri      = envGoogleRedirectUri;
export const googleAppClientId      = "627523329723-5kfvuqg068851dsf6efh911ue4v7ttur.apps.googleusercontent.com";
