import React from 'react';
import './Custombutton.css';

const CustomButton=({children,...otherProps})=>{
    return(
    <div>
<button className="button" {...otherProps} >{children}</button>
    </div>
    )
}
export default CustomButton;