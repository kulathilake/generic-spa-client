import { Route } from "../../common/types/routes";
import LoginView from "../auth/LoginView";
import SIgnupView from "../auth/SIgnupView";

const dashboardRoutes: Route[] = [
    {
        component: LoginView,
        exact: false,
        isProtected: true,
        path: "/dashboard/links",
    },
    {
        component: SIgnupView,
        exact: false,
        isProtected: true,
        path: "/dashboard/channels"
    }
]

export default dashboardRoutes;