import React, {useState} from 'react';
import './sign-up.styles.scss';
import FormInputComponent from "../form-input/form-input.component";
import CustomButtonComponent from "../custom-button/custom-button.component";
import {auth,createUserProfileDocument} from "../../firebase/firebase.utils";

const SignUpComponent = ()=> {
    const [userCredentials,setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const {displayName, email, password, confirmPassword} = userCredentials;
   const handleSubmit = async event=>{
        event.preventDefault();

        if (password !== confirmPassword){
            alert("passwords do not match.");
            return;
        }
        try{
const user = await auth.createUserWithEmailAndPassword(email,password);
await createUserProfileDocument(user,{displayName});
setUserCredentials({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
});
        }catch (error) {
            console.log(error);
        }
    }
    const handleChange = event=>{
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

        return (
            <div className={"sign-up"}>
                <h2 className={"title"}>
                    <span>
                        Sign up with your email and password.
                    </span>
                    <form className="sign-up-form" onSubmit={handleSubmit}>
                        <FormInputComponent
                            type={"text"}
                            name={"displayName"}
                            value={displayName}
                            onChange={handleChange}
                            label={"displayName"}
                            required
                        /><FormInputComponent
                            type={"text"}
                            name={"email"}
                            value={email}
                            onChange={handleChange}
                            label={"Email"}
                            required
                        /><FormInputComponent
                            type={"password"}
                            name={"password"}
                            value={password}
                            onChange={handleChange}
                            label={"Password"}
                            required
                        /><FormInputComponent
                            type={"password"}
                            name={"confirmPassword"}
                            value={confirmPassword}
                            onChange={handleChange}
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
export default SignUpComponent;