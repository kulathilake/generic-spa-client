import { DashboardDrawerProps } from "../types";
import DashboardDrawerItem from "./DashboardDrawerItem";

export default function DashboardDrawer(props: DashboardDrawerProps){
    return (
        <div>
            {
                props.items.map((item,k)=>(
                    <DashboardDrawerItem {...item} key={`drawer-item-${k}`} />
                ))
            }
        </div>
    );
}