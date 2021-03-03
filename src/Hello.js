// import React, {Component} from "react";
import './Hello.css'

// class Hello extends Component {
//     render() {
//         return(
//             <div className="f2 tc">
//                 <h1 className="firstHeader">Hello World</h1>
//                 <p>{this.props.greeting}</p>
//                 <ul className="firstList">
//                     <li>Item 1</li>
//                     <li>Item 2</li>
//                     <li>Item 3</li>
//                 </ul>
//             </div>
//         );
//     };
// };

const Hello = (props) => {
    return(
        <div className="f2 tc">
            <h1 className="firstHeader">Hello World</h1>
            <p>{props.greeting}</p>
            <ul className="firstList">
                <li>Item 1</li>
                <li>{props.dog}</li>
                <li>Item 3</li>
            </ul>
        </div>
);
}

export default Hello;