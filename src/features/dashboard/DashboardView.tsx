import { DashboardViewProps } from "./types";
import DashboardTopMenu from "./components/DashboardTopMenu";
import DashboardDrawer from "./components/DashboardDrawer";
import withInjectedProps from "./components/withInjectedProps";
import ColumnedPage, {Column, Row} from "../../common/layouts/pages/ColumnedPage";
import DashboardDraweItems from './dashboard-items';
import { DashboardFeatureView } from "./components/DashboardFeatureView";
import Routes from "../../common/components/routes/NestedRoutes";
import dashboardRoutes from './dashboard-routes';
export function DashboardView(){
    return (
        <ColumnedPage>
            <Row>
                <DashboardTopMenu />
            </Row>
            <Row>
                <Column>
                    <DashboardDrawer items={DashboardDraweItems} />
                </Column>
                <Column>
                    {/* Dashboard Content Here */}
                    <DashboardFeatureView>
                        {/* Nested Routes */}
                        <Routes redirect="login" routes={dashboardRoutes}/>
                    </DashboardFeatureView>
                </Column>
            </Row>
        </ColumnedPage>
    );
};

export default withInjectedProps<DashboardViewProps>(DashboardView);