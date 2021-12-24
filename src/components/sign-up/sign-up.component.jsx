import React, {Component} from 'react';
import './sign-up.styles.scss';
import FormInputComponent from "../form-input/form-input.component";

class SignUpComponent extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
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
                    </form>
                </h2>

            </div>
        )
    }
}