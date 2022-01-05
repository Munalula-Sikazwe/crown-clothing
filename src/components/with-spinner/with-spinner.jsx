import React from 'react';
import {SpinnerContainer,SpinnerOverlay} from "./with-spinner.styles";

const WithSpinner  = WrappedComponent => ({isLoading,...otherSpinnerProps})=>{
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ):
        <WrappedComponent {...otherSpinnerProps}/>
}

export default WithSpinner;