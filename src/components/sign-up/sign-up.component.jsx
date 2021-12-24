import React, {Component} from 'react';
import './sign-up.styles.scss';
import FormInputComponent from "../form-input/form-input.component";
import CustomButtonComponent from "../custom-button/custom-button.component";
import {auth,createUserProfileDocument} from "../firebase/firebase.utils";

class SignUpComponent extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    handleSubmit = async event=>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword){
            alert("passwords do not match.");
            return;
        }
        try{
const user = await auth.createUserWithEmailAndPassword(email,password);
await createUserProfileDocument(user,{displayName});
this.setState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
});
        }catch (error) {
            console.log(error);
        }
    }
    handleChange = event=>{
        const {name,value} = event.target;
        this.setState({[name]:value})
    }
    render = () => {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className={"sign-up"}>
                <h2 className={"title"}>
                    <span>
                        Sign up with your email and password.
                    </span>
                    <form className="sign-up-form" onSubmit={this.handleSubmit}>
                        <FormInputComponent
                            type={"text"}
                            name={"displayName"}
                            value={displayName}
                            onChange={this.handleChange}
                            label={"displayName"}
                            required
                        /><FormInputComponent
                            type={"text"}
                            name={"email"}
                            value={email}
                            onChange={this.handleChange}
                            label={"Email"}
                            required
                        /><FormInputComponent
                            type={"password"}
                            name={"password"}
                            value={password}
                            onChange={this.handleChange}
                            label={"Password"}
                            required
                        /><FormInputComponent
                            type={"password"}
                            name={"confirmPassword"}
                            value={confirmPassword}
                            onChange={this.handleChange}
                            label={"Confirm Password"}
                            required
                        />
                        <CustomButtonComponent type={"submit"}>
                            Sign Up
                        </CustomButtonComponent>
                    </form>
                </h2>

            </div>
        )
    }
}
export default SignUpComponent;