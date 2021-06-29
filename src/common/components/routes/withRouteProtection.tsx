import { ReactNode, } from "react";
import { Route,Redirect, RouteProps,} from "react-router-dom";
import { useAuth } from "../../../app/hooks"
import {Route as RouteType} from '../../types/routes';

export default function withRouteProtection(redirect: string | ReactNode): React.FC<RouteProps & RouteType>{
    return function(props) {
        const {isAuthenticated} = useAuth();
        /**
         * Checks if the user is authorized (isAuthenticated being true is a given)
         * as per the permission requirement and user permissions, to view the route.
         * WARNING: Client Side route protection is not enough to actually protect the
         * data behind these routes. Always use server sider authorization when handling 
         * requests.
         * @returns boolean
         */
        const isAuthorized = (): boolean=> {
            return isAuthenticated;
            // TODO check current route permission requirements against user permissions.
        }
        const renderFallback = ():ReactNode => {
            if(typeof redirect === 'string'){
                return <Redirect to={redirect}/>
            } else {
                return redirect
            };
        };

        if(isAuthenticated!==undefined){
            return (
            <Route {...(props as RouteProps)}>
                {isAuthorized()?props.children:renderFallback()}
            </Route>
                
            )
        } else {
            return null;
        }
    }
}