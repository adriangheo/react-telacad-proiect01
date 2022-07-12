import React from 'react';

function UserItem(props) {
    const {name, email, isGoldClient, salariu} = props;

    return (
        <div>
            <h3>{ name }</h3>
            <p>{ email }</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <p><b>salariu:</b> { salariu === undefined ? 'sumă nespecificată' : salariu }</p>
        </div>
    );
}

export default UserItem;