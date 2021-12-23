import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {auth} from "../firebase/firebase.utils";

const header = ({currentUser}) => (
    <div className={"header"}>
        <Link to={"/"} className={"logo-container"}>
            <Logo className={"logo"}/>
        </Link>
        <div className={"options"}>
            <Link to={"/shop"} className={"option"}>SHOP</Link>
            <Link to={"/contact"} className={"option"}>CONTACT</Link>
            {
                currentUser ?
                    <div onClick={auth.signOut}>
                        SIGN OUT
                    </div>
                    : <Link to={"/signin"} className={"option"}>SIGN IN</Link>
            }
        </div>
    </div>
)

export default header;