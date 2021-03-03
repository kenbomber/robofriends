import React, {Component} from "react";
import './Hello.css'

class Hello extends Component {
    render() {
        return(
            <div className="firstComponent">
                <h1 className="firstHeader">Hello World</h1>
                <p>Welcome to React</p>
                <ul className="firstList">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        );
    };
};

export default Hello;