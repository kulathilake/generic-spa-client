import { Roles } from "../../common/types/auth";
import { DashboardDrawerItemProps } from "./types";

const items: DashboardDrawerItemProps[] = [
    {
        icon: "/assets/icons/dashboard/home.png",
        label: "Dashboard",
        path: "/dashboard"
    },
    {
        icon: "/assets/icons/dashboard/links.png",
        label: "Links",
        path:"/dashboard/links"
    },{
        icon: "/assets/icons/dashboard/channels.png",
        label: "Channels",
        path: "/dashboard/channels",
        requiredRole: Roles.CREATOR
    }
];

export default items;