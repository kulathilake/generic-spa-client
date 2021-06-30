import { DashboardDrawerItemProps } from "../types";
import { Link } from "react-router-dom";
export default function DashboardDrawerItem(props: DashboardDrawerItemProps){
    return (
        <li>
            {typeof props.icon ==="string"? <img src={props.icon} alt={props.label}/>:props.icon}
            <span>
                <Link to={props.path}>
                    {props.label}
                </Link>
            </span>
        </li>
    );
}