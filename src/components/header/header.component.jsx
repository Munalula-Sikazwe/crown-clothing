import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';

const header = () => (
    <div className={"header"}>
        <Link to={"/"} className={"logo-container"}>
            <Logo className={"logo"}/>
        </Link>
        <div className={"options"}>
            <Link to={"/shop"} className={"option"}>SHOP</Link>
            <Link to={"/contact"} className={"option"}>CONTACT</Link>
            <Link to={"/signin"} className={"option"}>Sign In</Link>
        </div>
    </div>
)

export default header;