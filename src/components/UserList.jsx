import React from 'react';
import UserItem from './UserItem';
import './UserList.css'

function UserList(props) {
    const { users, getUserKey } = props;



    return (
        <div className='UserList'>
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