import React from 'react';
import './Validation.css';

const validation = (props) => {
    if(props.inputLength > 0 && props.inputLength < 5){
        return (
            <span className="Validation">Text too short</span>
        )
    }else if (props.inputLength > 10){
        return (
            <span className="Validation">Text long enough</span>
        )
    }else{
        return null;
    }
};


export default validation;
