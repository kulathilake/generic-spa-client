import { Route } from "../common/types/routes";
import LandingPage from "../features/landing";

/**
 * This file contains all the routes used by the application.
 */
export const routes: Route[] = [
    {
        component: LandingPage,
        exact: true,
        isProtected: false,
        path: '/',
    }
];