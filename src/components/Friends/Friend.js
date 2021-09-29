import React, { useEffect, useState } from 'react';
import SingleFriend from '../singleFriend/SingleFriend';
import './Friend.css'
const Friend = () => {
    const [friends,setFriend] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setFriend(data));
    },[])
    return (
        <div>
            <h3>My Friend List: {friends.length}</h3>
            <div className="friendContainer">
            {
                friends.map(friend => <SingleFriend friend={friend} key={friend.id}></SingleFriend>)
            }
            </div>
           
        </div>
    );
};

export default Friend;