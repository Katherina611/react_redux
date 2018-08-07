import React from 'react';

const userInput = (props) =>{
    return (
        <div className = "User">
            <input type="text" onChange={props.change} value={props.name} style={props.style}/>
        </div>
    )
};
export default userInput;