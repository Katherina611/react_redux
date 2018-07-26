import React from 'react';

const userOutput = (props) =>{
    return (
        <div style={props.style}>
            <p>I'm {props.name}</p>
            <p>I have a {props.animal}</p>
        </div>
    )
};
export default userOutput;