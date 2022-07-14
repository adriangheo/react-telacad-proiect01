import React from 'react';
import PostItem from './PostItem';
import UserItem from './UserItem';

function PostList(props) {
    const { posts } = props;

    return (
        <div>
            <h2>Lista posturi:</h2>
            
            { posts.map((singlePost, index) => {
                return <PostItem
                    title={ singlePost.title }
                    body={ singlePost.body }
                />
            })}
        </div>
    );
}

export default PostList;