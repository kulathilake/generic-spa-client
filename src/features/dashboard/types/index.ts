import { ReactNode } from "react";

export type DashboardWrapperProps = {}
export type DashboardViewProps = {};
export type DashboardDrawerProps = {
    items: DashboardDrawerItemProps[]
}
export type DashboardDrawerItemProps = {
    label: string;
    path: string;
    icon: ReactNode | string;
}