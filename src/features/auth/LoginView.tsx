import { LoginViewProps } from "./types/types";
import withAuthContext from "./components/withAuthContext";
import ColumnedPage, {Column, Row} from "../../common/layouts/pages/ColumnedPage";

/**
 * UI For Login Screen
 */
export function LoginView(props: LoginViewProps) {
    return (
        <ColumnedPage center={true}>
            <Column>
                <Row>
                    Login
                </Row>
                <Row>
                    <form>
                        <input id="email" name="email"/>
                        <input id="password" name="password" type="password"/>
                        <button type="submit">Login</button>
                    </form>
                </Row>
            </Column>
        </ColumnedPage>
    )
};

export default withAuthContext<LoginViewProps>(LoginView);