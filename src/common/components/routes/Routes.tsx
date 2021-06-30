import { BrowserRouter, Switch, Route, } from "react-router-dom";
import { RouterProps } from "../../types/routes";
import withRouteProtection from "./withRouteProtection";

export default function Routes(props:RouterProps){
    const ProtectedRoute = withRouteProtection(props.redirect);
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}