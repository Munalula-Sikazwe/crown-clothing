import React from 'react';
import "./form-input.styles.scss";

const formInputComponent = ({handleChange, label, ...otherFormInputProps}) => (
    <div className={"group"}>
        <input className={"form-input"} onChange={handleChange} {...otherFormInputProps}/>
        {console.log(label)}
        {
            label ?
                (
                    <label
                        className={`${otherFormInputProps.value.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>
                )
                : null
        }
    </div>
)

export default formInputComponent;