import { Switch, Route, } from "react-router-dom";
import { RouterProps } from "../../types/routes";
import withRouteProtection from "./withRouteProtection";

export default function NestedRoutes(props:RouterProps){
    const ProtectedRoute = withRouteProtection(props.redirect);
    return (
            <Switch>
            {props.routes.map((route,i)=>{
                return route.isProtected? 
                <ProtectedRoute {...route} key={`route-${i}`}>
                    {<route.component/>}
                </ProtectedRoute>:
                <Route {...route} key={`route-${i}`}>
                    {<route.component/>}
                </Route>
            })
            }
            </Switch>
    )
}