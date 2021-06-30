import { DashboardViewProps } from "./types";
import DashboardTopMenu from "./components/DashboardTopMenu";
import withInjectedProps from "./components/withInjectedProps";

export function DashboardView(){
    return (
        <DashboardTopMenu />
    );
};

export default withInjectedProps<DashboardViewProps>(DashboardView);