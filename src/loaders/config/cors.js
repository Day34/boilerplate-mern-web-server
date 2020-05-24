import { WEB_CLIENT_URL } from "../../constants";

export default {
    origin: [
        WEB_CLIENT_URL,
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
};