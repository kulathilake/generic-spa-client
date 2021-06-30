import React from "react";
import { DashboardWrapperProps } from "../types";

/**
 * A Higher Order Component to inject props and more importantly 
 * Callbacks and Handler functions into UI components. These wrappers
 * will help keep the business logic seperated from UI level components
 * as conveniently as possible.
 */

/**
 * This generic function will accept React Components of type P and will inject Props from type
 * FeatureWrapperProps. Further more the wrapped function will not expose the injected props 
 * to other components which intend to use the said wrapped component, essentaily hiding the excess
 * implementation details.
 * @param Component 
 */
export default function withInjectedProps <P extends DashboardWrapperProps>
(Component: React.ComponentType<P>):React.FC<Omit<P, keyof DashboardWrapperProps>> {
    return function WrappedFeatureComponent(props){
        /**
         * Add stuff to inject.
         */
        return(
            <Component {...(props as P)} 
                //Override props here.
            />
        )}
}