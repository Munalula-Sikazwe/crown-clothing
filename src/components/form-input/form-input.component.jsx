import React from 'react';
import "./form-input.styles.scss";

const formInputComponent = ({handleChange, label, ...otherFormInputProps}) => (
    <div className={"group"}>
        <input className={"form-input"} onChange={handleChange} {...otherFormInputProps}/>
        {
            label ?
                (
                    <label className={`${otherFormInputProps.value.length ? 'shrink' : ''} for`}/>
                )
                : null
        }
    </div>
)

export default formInputComponent;