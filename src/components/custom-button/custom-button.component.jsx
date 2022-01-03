import React from 'react';
import './custom-button.styles.scss';
import {CustomButtonContainer} from "./custom-button.styles";
const customButtonComponent = ({children, ...props})=>(
    <CustomButtonContainer {...props} >
        {console.log(props.isGoogleSignIn)}
        {children}
    </CustomButtonContainer>
)
export default customButtonComponent;