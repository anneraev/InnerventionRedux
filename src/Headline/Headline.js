import React, {useState} from 'react';

// const Headline = ({ value }) => {
//     return <h1>{value}</h1>;
// };

// const Headline = () => {
//     const [greeting, setGreeting] = useState('Function Component Use State!')

//     return <h1>{greeting}</h1>
// };

// const Headline = () => {
//     const [greeting, setGreeting] = useState('Function Component Use State!')

//     return (
//         <div>
//             <h1>{greeting}</h1>

//             <input type="text" value={greeting} onChange={event => setGreeting(event.target.value)}
//             />
//         </div>
//     );
// };

import InputTitle from '../InputTitle/InputTitle.js'

const Headline = () => {
    const [greeting, setGreeting] = useState('Function Component Use State!')

    const hanleChange = event => setGreeting(event.target.value);

    return <InputTitle value={greeting} changeFunction={hanleChange}/>
};


export default Headline;