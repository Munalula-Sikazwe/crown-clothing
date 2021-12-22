import React, {Component} from 'react';
import './sign-in.styles.scss';

class SignInComponent extends Component {
    state = {
        email : '',
        password: '',
    }
    handleSubmit = event =>{
        event.preventDefault();
    }
    handleChange = event =>{
        const {value,name } = event.target;
        this.setState({[name]:value});
    }
    render = ()=>{
        const {email,password} = this.state;
            return (<div className={"sign-in"}>
                <h2> I Already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <input name={"email"} type="email" value={email} onChange={this.handleChange} required/>
                    <input name={"password"} type={"password"} value={password} onChange={this.handleChange} required/>
                    <input type={"submit"} value={"Submit Form"} />
                </form>
            </div>)
    }


}
export default SignInComponent