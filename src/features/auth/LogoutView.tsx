/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useHistory } from "react-router";
import withAuthContext from "./components/withAuthContext";
import { LogoutViewProps } from "./types/types";

export function LogoutView(props: LogoutViewProps){
    const history = useHistory();
    useEffect(()=>{
        props.onLogout();
        history.push('/');
    },[]);
    return null;
}

export default withAuthContext<LogoutViewProps>(LogoutView);