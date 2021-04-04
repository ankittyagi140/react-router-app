import React from 'react';

const InputForm = ({changeHandler,...otherProps}) => {

    return (
        <div>
            <input className="input-field" onChange={changeHandler} {...otherProps}/>
        </div>
    )
}
export default InputForm;