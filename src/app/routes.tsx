import { Route } from "../common/types/routes";
import LoginView from "../features/auth/LoginView";
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
    },
    {
        component: LoginView,
        exact: true,
        isProtected: false,
        path:'/login'
    }
];