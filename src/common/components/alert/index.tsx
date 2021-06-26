import { AlertProps } from "../../types/alert";
import withAlertContext from "./withAlertContext";

export function Alert(props: AlertProps){
    return <div>{props.alert?.message}</div>;
}

export default withAlertContext(Alert);