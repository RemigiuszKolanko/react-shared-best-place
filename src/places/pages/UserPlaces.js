import React from 'react';

import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';
const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'U1 Empire State Building',
        description: 'One of the most famous sky scrapers i the world!',
        imageUrl: 'https://images.musement.com/cover/0002/80/esb-standard-cover_header-179920.png?w=1200&h=630&q=60&fit=crop',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'U2 Empire State Building',
        description: 'One of the most famous sky scrapers i the world!',
        imageUrl: 'https://images.musement.com/cover/0002/80/esb-standard-cover_header-179920.png?w=1200&h=630&q=60&fit=crop',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces;