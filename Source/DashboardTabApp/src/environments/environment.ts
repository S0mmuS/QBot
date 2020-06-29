export const environment = {
    production: false,
    apiBaseUrl: "https://tpqbot29062020exploration.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "0ddc2582-ebbd-410f-b7c5-5c635eb51c60",
        clientId: "ddb66285-231a-4c5f-832e-fe322b70c34d",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
