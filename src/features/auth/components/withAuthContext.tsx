import React from "react";
import { AuthWrapperProps } from "../types/types";
import AuthApi from '../api';
import { Roles } from "../../../common/types/auth";

export default function withAuthContext <T extends AuthWrapperProps>(Component: React.ComponentType<T>)
: React.FC<Omit<T, keyof AuthWrapperProps>>{
    
    return function AuthComponent(props){
        const api = AuthApi.getApi();
        const handleLogin = async (email:string, password:string) => {
            try{
                return await api.login(email,password)
            }catch(error){
                console.log(error);
            }
        };
        const handleSignup = async (name: string, email: string, password: string, role: Roles) => {
            try{
                return await api.signup(email, password);
            }catch(error){
                console.log(error);
            }
        }
        return <Component 
        {...(props as T)} 
        onLogin={handleLogin}
        onSignup={handleSignup}
        />
    }
}