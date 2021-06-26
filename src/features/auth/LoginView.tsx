import React, { FormEventHandler } from "react";
import { LoginViewProps } from "./types/types";
import withAuthContext from "./components/withAuthContext";
import ColumnedPage, {Column, Row} from "../../common/layouts/pages/ColumnedPage";
import AsyncActionButton from "../../common/components/buttons/AsyncActionButton";
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
                <Row>
                    Login
                </Row>
                <Row>
                    <form onSubmit={handleLoginSubmit}>
                        <input id="email" name="email"/>
                        <input id="password" name="password" type="password"/>
                        <AsyncActionButton type="submit">Login</AsyncActionButton>
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