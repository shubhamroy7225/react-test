import React, { Component } from "react";
import { Button,Container,Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Form from "./FormData"
export class Navbar extends Component {
    state = {
        open: false,
      };
    
      onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };
  render() {
    const { open } = this.state;
    return (
      <div>
        <Container>
          <Row>
          <Button variant="outline-primary">search</Button>{' '}
          <Button variant="outline-primary" onClick={this.onOpenModal}>add</Button>
          </Row>
        </Container>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2><Form /></h2>
          </Modal>
      </div>
    );
  }
}
export default Navbar;
