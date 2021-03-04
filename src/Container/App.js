import React, { Component } from 'react';
import Scroll from '../components/Scroll'
import Cardlist from '../components/Cardlist';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css'

// state is the description of a app, is able to change
// props are simply things come from STATE
// A parent feeds the STATE to a child componentsd, which enable the different component to communicate with each other
// Thus, state usually lives in the parent component

class App extends Component {
// the mounting methods can run automatically without calling them, which includes "constructor", "componentDidMount", "render"
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ""
        }
        console.log("1")
    };

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> {
            return response.json();
        }).then(users => {
            this.setState({ robots: users })
        });
    // fetch is a window method to make request to servers
    // what if the process is to long,, go to 53
    };

    onSearchChange = (event) => {
        // onSearchChange (event) {------> this will lead to lots of errors
        // since "event" happens at the SearchBox--->input, the value of this is the input not the App class, "input" doese not have the state of robots
        // thus, everytime in react building own function, we must use arrow function which "this" refers to App
        // in order to update state, using this.setState()
        this.setState({ searchField: event.target.value })
        // const filteredRobot = this.state.robots.filter(robot => {
        //     return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        // });
        // console.log(filteredRobot);
    };

    render() {
        const {robots, searchField} = this.state;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        console.log("3");

        return (!robots.length)?
        <h1>Loading</h1>:
        (
            <React.StrictMode>
                <header>
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                </header>
                <Scroll>
                    <Cardlist robots={filteredRobot}/>
                </Scroll>
            </React.StrictMode>
        );
            // try to create a component "scroll" wraps the Cardlist component. The concept "children" will be introducted here     
    };
}



export default App;
// this kind of export is used in single output function components

// In the console log, it shows:
// 1 constructor----->Mounting function
// 3 render----->Mounting function
// 2 componentDidMount----->also the update function
// 3 render------->also the update function
// This means that react will rerun everytime the states get updated