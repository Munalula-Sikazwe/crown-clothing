import React, { useState} from 'react';
import './sign-in.styles.scss';
import FormInputComponent from "../form-input/form-input.component";
import CustomButtonComponent from "../custom-button/custom-button.component";
import {auth, signinWithGoogle} from "../../firebase/firebase.utils";

const SignInComponent = ()=> {
    const [userCredentials,setUserCredentials] = useState({email:'',password:''});
    const {email, password} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = userCredentials;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({email: '', password: ''})
        } catch (error) {
            console.log("error signing in ", error.message)
        }

    }
    const handleChange = event => {
        const {value, name} = event.target;
        setUserCredentials({...userCredentials,[name]: value});
    }


        return (<div className={"sign-in"}>
            <h2> I Already have an account</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInputComponent name={"email"} type={"email"} value={email} handleChange={handleChange}
                                    label={'email'} required/>
                <FormInputComponent name={"password"} type={"password"} value={password}
                                    handleChange={handleChange} label={'password'} required/>
                <div className={"buttons"}>
                    <CustomButtonComponent type={"submit"}>
                        Sign In
                    </CustomButtonComponent>

                    <CustomButtonComponent onClick={() => {
                        signinWithGoogle()
                    }} isGoogleSignIn>
                        Sign In with Google
                    </CustomButtonComponent>
                </div>

            </form>
        </div>)



}

export default SignInComponent