import React from 'react';

const CalButton=({children,handleClickCal,...otherProps})=>{
return(
    <div>
    <button {...otherProps} onClick={()=>handleClickCal(children)}>{children}</button>
</div>
)
   
}
export default CalButton;