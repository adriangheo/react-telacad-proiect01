import React from 'react';
import NoUserIcon from '../assets/images/no-user-icon.png';



function UserItem(props) {
    const {id, name, email, isGoldClient, salariu, imagine} = props;
    
    const getUserKey = (key) => {
        console.log("key",key)
    }

    return (
        <div>
            <h3>{ name }</h3>
            <p>id {id}</p>
            <p>{ email }</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <p><b>salariu:</b> { salariu === undefined ? 'sumă nespecificată' : salariu }</p>
            <p><b>imagine:</b> { imagine === undefined ? 'imagine nespecificată' : imagine }</p>
            <img
                onError={(event) => (event.target.src=NoUserIcon) }
                src={ imagine === undefined ? NoUserIcon : imagine }
                alt="alt text"
            />
            <button onClick={()=>{getUserKey(id)}}>get user key</button>
        </div>
    );
}





  

export default UserItem;