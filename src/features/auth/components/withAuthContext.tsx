import React from "react";
import { AuthWrapperProps } from "../types/types";

export default function withAuthContext <T extends AuthWrapperProps>(Component: React.ComponentType<T>)
: React.FC<Omit<T, keyof AuthWrapperProps>>{
    return function AuthComponent(props){
        const handleLogin = (email:string, password:string) => {
            
        };
        return <Component 
        {...(props as T)} 
        onLogin={handleLogin}
        />
    }
}