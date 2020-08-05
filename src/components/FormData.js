import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
export class FormData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            file: [],
        };
        this.imageHandle = this.imageHandle.bind(this);
    }
    handleChange(event) {
        this.setState({ title: event.target.value });
    }
    changeDescription(event) {
        this.setState({ description: event.target.value });
    }
    imageHandle(event) {
        console.log('File: ', event.target.files[0]);
        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert('Data submitted successfully');
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId='exampleForm.ControlInput1'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type='text'
                            value={this.state.title}
                            onChange={this.handleChange.bind(this)}
                        />
                    </Form.Group>
                    <Form.Group controlId='exampleForm.ControlInput1'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type='text'
                            value={this.state.description}
                            onChange={this.changeDescription.bind(this)}
                        />
                    </Form.Group>
                    <input type='file' onChange={this.imageHandle} />
                    <img src={this.state.file} alt='preview' />
                    <Button type='submit' className='mb-2'>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
export default FormData;
