import React from "react";
import { AuthWrapperProps } from "../types/types";
import AuthApi from '../api';

export default function withAuthContext <T extends AuthWrapperProps>(Component: React.ComponentType<T>)
: React.FC<Omit<T, keyof AuthWrapperProps>>{
    
    return function AuthComponent(props){
        const api = AuthApi.getApi();
        const handleLogin = (email:string, password:string) => {
            // Dispatch Login Action
        };
        return <Component 
        {...(props as T)} 
        onLogin={handleLogin}
        />
    }
}