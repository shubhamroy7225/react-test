import React, { Component } from 'react';
import ProfileCard from './ProfileCard';
export class Cards extends Component {
    state = {
        users: [
            {
                name: 'John Doe',
                bio: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                profileImage: 'https://www.w3schools.com/w3css/img_avatar3.png',
            },
            {
                name: 'John Doe',
                bio: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                profileImage: 'https://www.w3schools.com/w3css/img_avatar3.png',
            },
            {
                name: 'John Doe',
                bio: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                profileImage: 'https://www.w3schools.com/w3css/img_avatar3.png',
            },
            {
                name: 'John Doe',
                bio: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                profileImage: 'https://www.w3schools.com/w3css/img_avatar3.png',
            },
            {
                name: 'John Doe',
                bio: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
                profileImage: 'https://www.w3schools.com/w3css/img_avatar3.png',
            },
        ],
    };

    render() {
        return (
            <div className='d-flex flex-row flex-wrap m-2'>
                {this.state.users.map(({ name, bio, profileImage }) => (
                    <ProfileCard {...{ name, bio, profileImage }} />
                ))}
            </div>
        );
    }
}
export default Cards;
