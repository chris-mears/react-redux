import React, { Component } from 'react';
import  { Form, FormControl, Button } from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'NOTES';

class App extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
            notes: []
        }
    }

    componentDidMount() {
        const notes = read_cookie(cookie_key);
        this.setState({notes});
    }

    submit() {
        // const notes = this.state.notes; same as line below
        const { notes, text } = this.state;
        const newNote = { text};
        notes.push(newNote);
        this.setState({ notes, text: '' });

        bake_cookie(cookie_key, this.state.notes);
    }

    clear() {
        delete_cookie(cookie_key);
         this.setState({notes: []})
    }

    render() {
        return (
            <div>
                <h2>Note To Self</h2>
                <Form inline>
                    <FormControl onChange={event => {this.setState({text: event.target.value})}} value={this.state.text} />
                    {' '}
                    <Button onClick={() => this.submit()}>Submit</Button>
                </Form>
                {
                    this.state.notes.map((note, i) => {
                        return (
                            <Note key={i} note={note} />
                        )
                    })
                }
                <hr />
                <Button onClick={() => this.clear()}>Clear Notes</Button>
            </div>
        )
    }
}

export default App;