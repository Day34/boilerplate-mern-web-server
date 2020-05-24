import commonRouter from './commonRouter';
// import { handleTimeout, logErrors, errorHandler } from './middleware';

const routes = (app) => {

    app.use('/common', commonRouter);

    // app.use(handleTimeout);
    // app.use(logErrors);
    // app.use(errorHandler);
};

export default routes;
