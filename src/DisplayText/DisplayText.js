import React from 'react';

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

//Displays text property passed to it from parent component.
const DisplayText = ({value}) => {

    return (
        <div>
            <h1>{value}</h1>
        </div>
        )
};


export default DisplayText;