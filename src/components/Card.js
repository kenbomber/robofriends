// import React, {Component} from "react";
import './Card.css'

// class Card extends Component {
//     render(){
//         return(
//             <div className="card">

//             </div>
//         );
//     };
// };

const Card = ({ id, name, email }) =>{
// you can even deconstruct at parameter-----> receive and descture the prop right inside the paramter
    // const { id, name, email } = props;
// deconstruction makes thing lot easier
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-10">
            <img alt={"robot"} src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;