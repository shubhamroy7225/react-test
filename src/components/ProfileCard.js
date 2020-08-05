import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

export class ProfileCard extends Component {
    render() {
        return (
            <div className='m-2'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant='top'
                        src={this.props.profileImage}
                        alt='user profile image'
                    />
                    <Card.Body className='text-left'>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>{this.props.bio}</Card.Text>
                        <Button className='mr-2' variant='primary'>
                            Edit
                        </Button>
                        <Button variant='danger'>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default ProfileCard;
