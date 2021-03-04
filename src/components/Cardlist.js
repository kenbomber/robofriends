import Card from './Card'
import React from 'react'

const Cardlist = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name}
                email={robots[i].email}
             />
        );
    })
// in react, these cards are all tracked through the key, so react will change the entire DOM to make the change. And the work at the DOM should be minimized
    return(
        <React.StrictMode>
            {cardComponent}
        </React.StrictMode>
    );
    
};

export default Cardlist;