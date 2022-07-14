import React from 'react';
import NoUserIcon from '../assets/images/no-user-icon.png';



function PostItem(props) {
    const {title, body} = props;
    
    return (
        <div>
            <p><b>Post Title:</b> {title}</p>
            <p>{body}</p>
        </div>
    );
}





  

export default PostItem;