let envUri;

if (process.env.NODE_ENV === "production") {
    envUri = "https://thrubi-server.herokuapp.com";
} else {
    envUri = "https://localhost:8443";
}

export const uri = envUri;