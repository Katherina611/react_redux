import React from 'react';

const userOutput = (props) =>{
    return (
        <div style={props.style}>
            <p>User: {props.name}</p>
            <p>It's working</p>
        </div>
    )
};
export default userOutput;