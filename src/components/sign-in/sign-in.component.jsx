import React, {Component} from 'react';
import './sign-in.styles.scss';
import FormInputComponent from "../form-input/form-input.component";
import CustomButtonComponent from "../custom-button/custom-button.component";
import {auth,signinWithGoogle} from "../firebase/firebase.utils";

class SignInComponent extends Component {
    state = {
        email: '',
        password: '',
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''})
        }catch (error) {
console.log("error signing in ",error.message)
        }
        
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
                <div className={"buttons"}>
                    <CustomButtonComponent type={"submit"}>
                        Sign In
                    </CustomButtonComponent>

                    <CustomButtonComponent onClick={()=>{signinWithGoogle()}} isGoogleSignIn>
                        {' '}Sign In with Google{' '}
                    </CustomButtonComponent>
                </div>

            </form>
        </div>)
    }


}

export default SignInComponent