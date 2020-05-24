export const APP_ENV = process.env.APP_ENV;
export const WEB_SERVER_HOST = process.env.WEB_SERVER_HOST;
export const WEB_SERVER_PORT = process.env.WEB_SERVER_PORT;
export const WEB_CLIENT_HOST = process.env.WEB_CLIENT_HOST;
export const WEB_CLIENT_PORT = process.env.WEB_CLIENT_PORT;

let WEB_SERVER_URL, WEB_CLIENT_URL;
if(APP_ENV === 'local') {
    WEB_SERVER_URL = `${WEB_SERVER_HOST}:${WEB_SERVER_PORT}`;
    WEB_CLIENT_URL = `${WEB_CLIENT_HOST}:${WEB_CLIENT_PORT}`
} else {
    WEB_SERVER_URL = WEB_SERVER_HOST;
    WEB_CLIENT_URL = WEB_CLIENT_HOST;
}

export { WEB_SERVER_URL, WEB_CLIENT_URL };