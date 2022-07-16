import React from 'react';
import UserItem from './UserItem';
import './UserList.css'

function UserList(props) {
    const { users, getUserEmail } = props;




    return (
        <div className='UserList'>
            <h2>Lista utilizatorilor:</h2>
            { users.map((user, index) => {
                return <UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    isGoldClient={ user.isGoldClient }
                    salariu={ user.salariu }
                    imagine={user.imagine }
                    key={ index }
                    getUserEmail={(email) => getUserEmail(email)}
                    
                />
            })}
        </div>
    );
}

export default UserList;