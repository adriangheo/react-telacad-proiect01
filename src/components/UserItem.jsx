import React from 'react';
import NoUserIcon from '../assets/images/no-user-icon.png';


function UserItem(props) {
    const {name, email, isGoldClient, salariu, imagine} = props;

    return (
        <div>
            <h3>{ name }</h3>
            <p>{ email }</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <p><b>salariu:</b> { salariu === undefined ? 'sumă nespecificată' : salariu }</p>
            <p><b>imagine:</b> { imagine === undefined ? 'imagine nespecificată' : imagine }</p>
            <img
                src={NoUserIcon}
                alt="car"
            />
        </div>
    );
}


const isImgLink = (url) => {
    if (typeof url !== 'string') {
      return false;
    }
    return (url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null);
  }

  

export default UserItem;