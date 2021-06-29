import { Route } from "../common/types/routes";
import LoginView from "../features/auth/LoginView";
import LogoutView from "../features/auth/LogoutView";
import SignupView from "../features/auth/SIgnupView";
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
    },
    {
        component: SignupView,
        exact: true,
        isProtected: false,
        path: '/register'
    },
    {
        component: LogoutView,
        exact: true,
        isProtected: true,
        path: '/logout'
    }
];