import { useAuth } from "../../../app/hooks";
import { DashboardDrawerProps } from "../types";
import DashboardDrawerItem from "./DashboardDrawerItem";

export default function DashboardDrawer(props: DashboardDrawerProps){
    const {user} = useAuth();
    return (
        <div>
            
            {
                props.items.map((item,k)=>{
                    console.log(item,user)
                    if(!!!item.requiredRole || item.requiredRole === user?.account?.role){
                        return <DashboardDrawerItem {...item} key={`drawer-item-${k}`} />
                    } else {
                        return null;
                    }
                })
            }
        </div>
    );
}