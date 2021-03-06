import React, { Component } from 'react'
import { Input, Card, Button } from 'semantic-ui-react'

import styles from './newevent.scss'

import axios from 'axios'

class NewEvent extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            points: 1,
            date: ''
        }

        this.handleName = this.handleName.bind(this);
        this.handlePoints = this.handlePoints.bind(this);
        this.handleDate = this.handleDate.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event) {
        this.setState({name: event.target.value});
    }
    handlePoints(event) {
        this.setState({points: event.target.value});
    }
    handleDate(event) {
        this.setState({date: event.target.value});
    }

    handleSubmit() {
        let newEvent = {
            name: this.state.name,
            points: this.state.points,
            date: this.state.date
        };

        axios.post('http://127.0.0.1:3000/api/events', newEvent).then( (response) => {
            console.log(response);
        })
    }

    componentWillMount() {

    }
    render() {
        return(
            <Card fluid className="NewEvent">
                <Card.Content>
                    <h4>Event Name</h4>
                    <Input fluid placeholder='i.e. Google Tech Talk' value={this.state.name} onChange={this.handleName} />
                    <br />
                    <h4>Points</h4>
                    <Input fluid placeholder='i.e. 2' value={this.state.points} onChange={this.handlePoints} />
                    <br />

                    <h4>Event Date</h4>
                    <Input fluid placeholder='i.e. DD/MM/YY or DD-MM-YY or January 1, 2018' value={this.state.date} onChange={this.handleDate} />
                    <br />

                    <Button fluid onClick={this.handleSubmit}>Create Event</Button>
                </Card.Content>
            </Card>
        )
    }
}

export default NewEvent
