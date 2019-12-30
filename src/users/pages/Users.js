import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Remi Kol',
            image: 'https://images.freeimages.com/images/large-previews/a3c/maia-2-1436576.jpg',
            places: 3
        }
    ];

    return <UsersList items={USERS}/>;
};

export default Users;