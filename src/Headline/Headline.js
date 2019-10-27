import React, {useState} from 'react';

// const Headline = ({ value }) => {
//     return <h1>{value}</h1>;
// };

const Headline = () => {
    const [greeting, setGreeting] = useState('Function Component Use State!')

    return <h1>{greeting}</h1>
};

export default Headline;