import { Configuration } from "@azure/msal-node";

const msalConfig: Configuration = {
  auth: {
    clientId: process.env.CLIENT_ID as string,  
    authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`, 
    clientSecret: process.env.CLIENT_SECRET,  
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
    },
  },
};

export {msalConfig};
