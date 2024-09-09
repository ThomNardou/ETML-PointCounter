import { PublicClientApplication, AccountInfo } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

const login = async () => {
    try {
        const loginResponse = await msalInstance.loginPopup({
            scopes: ["User.Read"] // Définissez les permissions nécessaires
        });
        console.log("Login success:", loginResponse);
        return loginResponse.account;
    } catch (error) {
        console.error("Login error:", error);
    }
};

const logout = () => {
    const currentAccount = msalInstance.getActiveAccount();
    if (currentAccount) {
        msalInstance.logoutPopup({
            account: currentAccount
        });
    }
};

export {login, logout}
