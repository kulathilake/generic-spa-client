import { ReactNode } from "react";
import { Roles } from "../../../common/types/auth";

export type DashboardWrapperProps = {}
export type DashboardViewProps = {};
export type DashboardDrawerProps = {
    items: DashboardDrawerItemProps[]
}
export type DashboardDrawerItemProps = {
    label: string;
    path: string;
    icon: ReactNode | string;
    requiredRole?: Roles
}