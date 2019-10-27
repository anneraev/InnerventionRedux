import React from 'react';

const InputTitle = (props) => {
    return (
        <div>
            <h1>{props.value}</h1>

            <input type="text" value={props.greeting} onChange = {props.changeFunction}
            />
        </div>
    );

}

export default InputTitle;