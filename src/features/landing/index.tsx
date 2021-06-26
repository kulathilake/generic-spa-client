import ColumnedPage, {Column, Row} from "../../common/layouts/pages/ColumnedPage";
import LandingPageMenu from "./components/LandingPageMenu";
import LandingPageHero from "./components/LandingPageHero";
import LandingPageFooter from "./components/LandingPageFooter";

export default function LandingPage(){
    return (
        <ColumnedPage gap={2} fullWidth={true} >
            <Column>
                <Row>
                    {/* Here Goes the Main Menu */}
                    <LandingPageMenu/>
                </Row>
                <Row>
                    {/* Here Goes the Hero */}
                    <LandingPageHero />
                </Row>
                <Row>
                    {/* Body of the Landing Page */}
                    
                </Row>
                <Row>
                    {/* Here Goes the Footer */}
                    <LandingPageFooter />
                </Row>
            </Column>
        </ColumnedPage>
    );
}