import React, { Component } from "react";
import { Button,Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export class Cards extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem"}}>
          <Card.Img variant="top" src="blob:http://localhost:3000/9a7da903-5cb1-44c6-af3e-24ebcb2703e9" />
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Title>Description</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Edit</Button>{' '}
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Cards;


