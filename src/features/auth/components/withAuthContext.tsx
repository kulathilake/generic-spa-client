/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { AuthWrapperProps } from "../types/types";
import AuthApi from '../api';
import { Roles } from "../../../common/types/auth";
import { useAlert, useAuth } from "../../../app/hooks";
import { useHistory } from "react-router-dom";
import { AuthenticatedUser } from "../../../common/types/user";
import { useDispatch } from "react-redux";
import { setCurrentSession } from "../authSlice";

export default function withAuthContext <T extends AuthWrapperProps>(Component: React.ComponentType<T>)
: React.FC<Omit<T, keyof AuthWrapperProps>>{
    
    return function AuthComponent(props){
        const api = AuthApi.getApi();
        const {setAlert} = useAlert();
        const {setIsAuthenticated,setUser} = useAuth();
        const dispatch = useDispatch();
        const history = useHistory();
        const handleLogin = async (email:string, password:string) => {
            try{
                let user = await api.login(email,password);
                if(user){
                    setIsAuthenticated(true);
                    setUser(user as AuthenticatedUser);
                    dispatch(setCurrentSession(user));
                    setAlert({
                        message: "You are Logged In",
                        severity: 'success',
                        show: true,
                    });
                    history.push('/dashboard');
                };
            }catch(error){
                setAlert({
                    message: error.message,
                    severity: 'error',
                    show: true,
                });
            }
        };
        const handleSignup = async (firstName: string, lastName:string, email: string, password: string, role: Roles) => {
            try{
                let user = await api.signup(email, password, {firstName,lastName}, role);
                if(user){
                    setIsAuthenticated(true);
                    setUser(user as AuthenticatedUser);
                    dispatch(setCurrentSession(user));
                    setAlert({
                        message: "Your Account has been created.",
                        severity: 'success',
                        show: true,
                    });
                    history.push('/dashboard');
                };
            }catch(error){
                setAlert({
                    message: error.message,
                    severity: 'error',
                    show: true,
                });
            }
        }
        const handleLogout = async () => {
            try {
                await api.logout();
                dispatch(setCurrentSession(null));
                setIsAuthenticated(false);
                setUser(null);
                setAlert({
                    message: "You are logged out.",
                    severity: 'success',
                    show: true,
                });
            } catch (error) {
                setAlert({
                    message: error.message,
                    severity: 'error',
                    show: true,
                });
                history.push('/');
            }
        }

        return <Component 
        {...(props as T)} 
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        />
    }
}