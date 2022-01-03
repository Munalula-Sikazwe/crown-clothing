import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIconComponent from "../cart-icon/cart-icon.component";
import CartDropdownComponent from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {HeaderContainer, LogoContainer, OptionContainer, OptionDiv, OptionLink} from "./header.styles";

const handleLogout = () => auth.signOut();

const header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to={"/"}>
            <Logo className={"logo"}/>
        </LogoContainer>
        <OptionContainer>
            <OptionLink to={"/shop"}>SHOP</OptionLink>
            <OptionLink to={"/contact"}>CONTACT</OptionLink>
            {
                currentUser ?
                    <OptionDiv onClick={handleLogout}>
                        SIGN OUT
                    </OptionDiv>
                    : <OptionLink to={"/signin"}>SIGN IN</OptionLink>
            }
            <CartIconComponent/>
        </OptionContainer>
        {
            hidden ?
                <CartDropdownComponent/>
                : null
        }
    </HeaderContainer>


)
const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    }
);
export default connect(mapStateToProps)(header);