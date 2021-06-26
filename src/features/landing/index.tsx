import ColumnedPage, {Column, Row} from "../../common/layouts/pages/ColumnedPage";
import LandingPageMenu from "./components/LandingPageMenu";

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
                    Carousel.
                </Row>
                <Row>
                    {/* Body of the Landing Page */}
                    Body.
                </Row>
                <Row>
                    {/* Here Goes the Footer */}
                    Landing Page Footer.
                </Row>
            </Column>
        </ColumnedPage>
    );
}