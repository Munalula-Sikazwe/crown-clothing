import React from 'react';

import {CustomButtonContainer} from "./custom-button.styles";

const customButtonComponent = ({children, ...props}) => (
    <CustomButtonContainer {...props} >

        {children}
    </CustomButtonContainer>
)
export default customButtonComponent;