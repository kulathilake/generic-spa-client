import React, { FormEventHandler, useState } from "react";
import { SignupViewProps } from "./types/types";
import withAuthContext from "./components/withAuthContext";
import ColumnedPage, { Column, Row } from "../../common/layouts/pages/ColumnedPage";
import AuthViewMenu from './components/AuthViewMenu';
import AsyncActionButton from "../../common/components/buttons/AsyncActionButton";
import { Roles } from "../../common/types/auth";

export function SignupView(props: SignupViewProps){
    const [isSignupPending,setIsSignupPending] = useState(false);

    const handleRegisterSubmit: FormEventHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSignupPending(true);
        const target = e.target as typeof e.target & {
            name: {value: string};
            email: {value: string};
            password: {value: string};
            confirmPassword: {value: string};
            role: {value: Roles}
        }
        props.onSignup(target.name.value, target.email.value, target.password.value, target.role.value)
        .then(()=>{
            
        })
        .catch()
        .finally(()=>{
            setIsSignupPending(false);
        })
    }
    return (
        <ColumnedPage center={true}>
            <Column>
                {(props.variant==="page" || props.variant===undefined)&&
                <Row>
                    {/* Login Screen Menu */}
                    <AuthViewMenu />
                </Row>}
                <Row>
                    <form onSubmit={handleRegisterSubmit}>
                        Register on Outreach
                        <label htmlFor="name">Your Name</label>
                        <input id="name" name="name" required/>
                        <label htmlFor="email">Your Email</label>
                        <input id="email" name="email" type="email" required/>
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" required/>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input id="confirmPassword" name="confirmPassword" type="password" required/>
                        <input id="role-creator" name="role" value={Roles.CREATOR}type="radio" required/>
                        <label htmlFor="role-cretor">I Create Content</label>
                        <input id="role-creator" name="role" value={Roles.SELLER} type="radio" required/>                        
                        <label htmlFor="role-cretor">I Sell Products</label>
                        <input id="role-both" name="role" value={Roles.BOTH} type="radio" required/>
                        <label htmlFor="role-both">I Do Both</label>
                        <AsyncActionButton type="submit" isRunning={isSignupPending}>Register</AsyncActionButton>
                    </form>
                </Row>
            </Column>
        </ColumnedPage>
    );
}

export default withAuthContext<SignupViewProps>(SignupView);
