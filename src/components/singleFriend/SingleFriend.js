import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const SingleFriend = (props) => {
   
const {id,name,email,phone,website,address} = props.friend
const url = `/friend/${id}`
const history = useHistory();
const handleAllFriends =() =>{
         history.push(`/friend/${id}`)
}
    return (
        <div style={{backgroundColor:'skyblue',margin:'10px',padding:'5px',border:'2px',borderRadius:'10px'}}>
            <h4>My name is: {name} {id} </h4>
            <p>Call Me: {phone}</p>
            <p>Contct Me: {email}</p>
            <p>My website: {website}</p>
            <p>Lives in: {address.city}</p>
             <Link to={url}>Visit Me</Link> <br/>
             
             <button onClick={handleAllFriends} >See Best friend</button>

             
             
        </div>
    );
};

export default SingleFriend;