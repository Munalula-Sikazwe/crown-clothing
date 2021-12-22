import React from 'react';
import './custom-button.styles.scss';

const customButtonComponent = ({children,...otherButtonProps})=>(
    <button className={"custom-button"} {...otherButtonProps}>
        {children}
    </button>
)
export default customButtonComponent;