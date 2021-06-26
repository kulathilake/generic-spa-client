import React, { FormEventHandler } from "react";
import { LoginViewProps } from "./types/types";
import withAuthContext from "./components/withAuthContext";
import ColumnedPage, {Column, Row} from "../../common/layouts/pages/ColumnedPage";
import LoginViewMenu from "./components/LoginViewMenu";
/**
 * UI For Login Screen
 */
export function LoginView(props: LoginViewProps) {

    const handleLoginSubmit: FormEventHandler = (e: React.FormEvent<HTMLFontElement>) =>{
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: {value: string},
            password: {value: string};
        }
        props.onLogin(target.email.value, target.password.value);
    };


    return (
        <ColumnedPage center={true}>
            <Column>
                {(props.variant==="page" || props.variant===undefined)&&<Row>
                    {/* Login Screen Menu */}
                    <LoginViewMenu />
                </Row>}
                <Row>
                    <form onSubmit={handleLoginSubmit}>
                        Login to Outreach
                        <input id="email" name="email"/>
                        <input id="password" name="password" type="password"/>
                        <button type="submit">Login</button>
                    </form>
                </Row>
                <Row>
                    Don't Have an Account yet?
                    <a href="/register">Create an Account</a>
                </Row>
                <Row>
                    <a href="/login/reset">Forgot Password?</a>
                </Row>
                <Row>
                    <button>Login with Google</button>
                    <button>Login with Facebook</button>
                </Row>
                
            </Column>
        </ColumnedPage>
    )
};

export default withAuthContext<LoginViewProps>(LoginView);