import React, {Component} from 'react';
import './sign-in.styles.scss';
import FormInputComponent from "../form-input/form-input.component";
import CustomButtonComponent from "../custom-button/custom-button.component";
import {signinWithGoogle} from "../firebase/firebase.utils";

class SignInComponent extends Component {
    state = {
        email: '',
        password: '',
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: '',})
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }
    render = () => {
        const {email, password} = this.state;
        return (<div className={"sign-in"}>
            <h2> I Already have an account</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={this.handleSubmit}>
                <FormInputComponent name={"email"} type={"email"} value={email} handleChange={this.handleChange}
                                    label={'email'} required/>
                <FormInputComponent name={"password"} type={"password"} value={password}
                                    handleChange={this.handleChange} label={'password'} required/>
                <CustomButtonComponent type={"submit"}>
                    Sign In
                </CustomButtonComponent>

                <CustomButtonComponent onClick={signinWithGoogle} isGoogleSignIn>{' '}Sign In with Google{' '}</CustomButtonComponent>
            </form>
        </div>)
    }


}

export default SignInComponent