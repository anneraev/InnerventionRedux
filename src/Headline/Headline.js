import React, {useState} from 'react';
import DisplayText from '../DisplayText/DisplayText';
import InputText from '../InputText/InputText'

// const Test = () => {
//     const greeting = 'Hello Function Component!';
//     return <Headline value={greeting} />;
// };

//This component has state and passes the function to change that state as a callback to a component responsible for being a reusable input for altering the text. The Display text component is also designed to be reusable.
const Headline = () => {
    const [greeting, setGreeting] = useState('Function Component Use State!')

    const handleChange = event => setGreeting(event.target.value);

    const label = "Set Greeting:"

    return (<div>
            <DisplayText value={greeting}/>
            <InputText label={label} changeFunction={handleChange} />
    </div>);
};

export default Headline;
