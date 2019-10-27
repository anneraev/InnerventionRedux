import React from 'react';

const InputTitle = (props) => {
    return (
        <div>
            <input type="text" onChange = {props.changeFunction}
            />
        </div>
    );

}

export default InputTitle;