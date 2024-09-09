import dotenv from "dotenv";
import { AppConfig } from "./authProvider";

dotenv.config()

const appConfig: AppConfig = {
    instance: process.env.INSTANCE || "ENTER_CLOUD_INSTANCE_HERE",
    tenantId: process.env.TENANT_ID || "ENTER_TENANT_ID_HERE",
    clientId: process.env.CLIENT_ID || "ENTER_CLIENT_ID_HERE",
    clientSecret: process.env.CLIENT_SECRET || "ENTER_CLIENT_SECRET_HERE",
    redirectUri: process.env.REDIRECT_URI || "ENTER_REDIRECT_URI_HERE",
};
