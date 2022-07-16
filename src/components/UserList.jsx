import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const { users } = props;

    const getUserKey = (key) => {
        console.log("key...uhu...: ",key)
    }

    return (
        <div>
            <h2>Lista utilizatorilor:</h2>
            { users.map((user, index) => {
                console.log("getUserKey: ", getUserKey)
                return <UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    isGoldClient={ user.isGoldClient }
                    salariu={ user.salariu }
                    imagine={user.imagine }
                    key={ index }
                    getUserKey={(key) => getUserKey(key)}
                    
                />
            })}
        </div>
    );
}

export default UserList;