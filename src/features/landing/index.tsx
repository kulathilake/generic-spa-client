import ColumnedPage, {Column, Row} from "../../common/layouts/pages/ColumnedPage";

export default function LandingPage(){
    return (
        <ColumnedPage gap={2} fullWidth={true} >
            <Column>
                <Row>
                    {/* Here Goes the Main Menu */}
                    Landing Page Menu.
                </Row>
                <Row>
                    {/* Here Goes the Carousel */}
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