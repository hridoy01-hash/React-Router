import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDeatils = () => {
    const {friendId} = useParams();
    const [friend,setfriend] = useState({})
    useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
    fetch(url)
    .then(response => response.json())
    .then(data => setfriend(data))

    },[]);
    const{name,email,phone,website,address} = friend;
    const history = useHistory();
    const gohome =() =>{
        history.push("/home")
    }
    return (
        <div>
            <h1>friends details coming soon:{friendId}</h1>
            <h4>My name is: {name}</h4>
            <p>Call Me: {phone}</p>
            <p>Contct Me: {email}</p>
            <p>My website: {website}</p>
            <p>Lives in: {address?.city}</p>
            <button onClick={gohome} >Go to home</button>
        </div>
    );
};

export default FriendDeatils;