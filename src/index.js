import express from 'express';
import http from 'http';
import loaders from './loaders';
import { WEB_SERVER_PORT } from './constants';

const startServer = () => {
    const app = express();
    const server = http.createServer(app);

    loaders(app, server);

    server.listen(WEB_SERVER_PORT, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Web Server is listening on port ${WEB_SERVER_PORT}`);
    });
};

startServer();