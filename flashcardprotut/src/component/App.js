import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Stacklist from './Stacklist'


// class App extends Component {

const App = () => {
    // render() {
        return (
            <div>
                <h2>Flashcard Pro</h2>
                <hr />
                <Stacklist />
                <hr />
                <Link to='stack_form'><h4>Create a New Stack</h4></Link>
            </div>
        )
    // }
}

export default App;