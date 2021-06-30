import { Route } from "../../common/types/routes";
import LoginView from "../auth/LoginView";

const dashboardRoutes: Route[] = [
    {
        component: LoginView,
        exact: false,
        isProtected: true,
        path: "/dashboard/links",
    }
]

export default dashboardRoutes;