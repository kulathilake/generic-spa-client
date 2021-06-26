import React, { ReactNode } from "react";
import { Permissions } from "./auth";

export type Route = {
    path: string;
    exact: boolean;
    component: React.ComponentType<any>;
    isProtected: boolean;
    isGuestOnly?: boolean;
    permissions?: Permissions[]
}

export type RouterProps = {
    routes: Route[];
    redirect: ReactNode | string
}