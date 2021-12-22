import React, {Component} from 'react';
import './sign-in.styles.scss';

class SignInComponent extends Component {
    state = {
        email : '',
        password: '',
    }
    render = ()=>{
        const {email,password} = this.state;
            return (<div className={"sign-in"}>
                <h2> I Already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form>
                    <input name={"email"} type="email" value={email} required/>
                    <input name={"password"} type={"password"} value={password} required/>
                </form>
            </div>)
    }


}
export default SignInComponent