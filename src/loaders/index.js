import expressLoader from "./expressLoader";
import routeLoader from "./routeLoader";

export default (app, server) => {
    expressLoader(app);
    console.log('✔️ Express Initialized');
    routeLoader(app);
    console.log('✔️ Route Initialized');
}