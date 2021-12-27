import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import cartIcon from "../cart-icon/cart-icon.component";
const handleLogout = ()=> auth.signOut();
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
                    <div className={"option"} onClick={handleLogout}>
                        SIGN OUT
                    </div>
                    : <Link to={"/signin"} className={"option"}>SIGN IN</Link>
            }
        </div>
    </div>
)
const mapStateToProps = state =>({currentUser:state.user.currentUser});
export default connect(mapStateToProps)(header);