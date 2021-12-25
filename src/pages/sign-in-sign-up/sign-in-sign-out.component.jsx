import React from 'react';
import './sign-in-sign-out.styles.scss';
import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUpComponent from "../../components/sign-up/sign-up.component";
const signInSignOutComponent = () => (
    <div className={"sign-in-and-sign-up"}>
        <SignInComponent/>
        <SignUpComponent/>
    </div>
);
export default signInSignOutComponent;