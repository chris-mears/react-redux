import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { addStack } from '../actions';

export class StackForm extends Component {
    constructor() {
     super();

     this.state = {
         title: '',
         cards: []
     }
    }

    addCard() {
        const { cards } = this.state;
        cards.push({id: cards.length, prompt: '', answer: ''});
        this.setState({ cards });
    }

    updateCard(event, index) {
        const { cards } = this.state;
        cards[index][event.target.name] = event.target.value;
        this.setState({ cards })
    }

    addStack() {
        console.log('StackForm state', this.state)
        this.props.addStack(this.state);
    }

    render() {
        return (
            <div>
                <Link to='/' className='link-home'><h4>Home</h4></Link>
                <h4>Create a New Stack</h4>
                <br />
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Title:</ControlLabel>
                        {' '}
                        <FormControl onChange={ event => this.setState({ title: event.target.value })}/>
                    </FormGroup>
                    {
                        this.state.cards.map((card, index) => {
                            return (
                                <div key={card.id}>
                                    <br />
                                    <FormGroup>
                                        <ControlLabel>Prompt:</ControlLabel>
                                        {' '}
                                        <FormControl name='prompt'
                                            onChange={event => this.updateCard(event, index)}/>
                                        {' '}
                                        <ControlLabel>Answer:</ControlLabel>
                                        {' '}
                                        <FormControl name='answer'
                                            onChange={event => this.updateCard(event, index)}/>
                                    </FormGroup>
                                </div>
                            )
                        })
                    }
                </Form>
                <br />
                <Button onClick={() => this.addCard()}>Add Card</Button>
                {' '}
                <Button onClick={() => this.addStack()}>Save and Add Stack</Button>
            </div>
        )
    }
}

export default connect(null, { addStack })(StackForm);