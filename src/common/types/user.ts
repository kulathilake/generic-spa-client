import { Address } from "./misc";
import { Permissions, Roles } from "./auth";

export interface User {
    username: string,
    account?: UserAccount
}

export type UserAccount = {
    role: Roles,
    permissions?: Permissions [],
    firstName: string;
    lastName?: string;
    mobile?: string;
    addresses?: Address[];
}

export interface AuthenticatedUser extends User {
    tokens: {
        accessToken: {
            data: string,
            ttl?: number // miliseconds
        }
        refreshToken?: {
            data: string,
            ttl?: number // miliseconds
        },
    },
}

