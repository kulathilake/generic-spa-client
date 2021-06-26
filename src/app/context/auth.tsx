import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { AuthenticatedUser } from "../../common/types/user";
import { AuthContextType } from "../../common/types/auth";

const AuthContext = createContext<AuthContextType>({} as AuthContextType); //TODO: AuthContextInterface
const {Consumer: AuthConsumer, Provider} = AuthContext;

function AuthProvider(props: any) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<AuthenticatedUser|null>(null);
    
    /**
     * Attaches the bearer token to the requests when the user exists
     * and when isAuthenticated is true;
     */
    useEffect(()=>{
        if(user?.tokens.accessToken && isAuthenticated){
            axios.defaults.headers.common['Authorization'] = user.tokens.accessToken;
        }else{
            axios.defaults.headers.common['Authorization'] = null;
        }
    },[user,isAuthenticated]);

    /**
     * Firebase Auth Listener
     */

    return (
        <Provider value={{isAuthenticated,setIsAuthenticated, user, setUser}}>
            {props.children}
        </Provider>
    )
};

export default AuthContext;
export {AuthConsumer, AuthProvider};