import React from 'react';
import './custom-button.styles.scss';

const customButtonComponent = ({children,isGoogleSignIn,inverted,...otherButtonProps})=>(
    <button className={`${inverted?'inverted':null} ${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherButtonProps}>
        {children}
    </button>
)
export default customButtonComponent;