import React from 'react';

//Displays a label, text input and sets the state of a component that calls it. Accepts a lebl text and a callback function for changing text state of its parent.
const InputTitle = ({label, changeFunction}) => {
    return (
        <div>
            <h4>{label}</h4>
            <input type="text" onChange = {changeFunction}
            />
        </div>
    );

}

export default InputTitle;