import React from 'react';
import './Api.css';

const Api=({name,username,email,address})=>{
    return(
        <div className="user-data">
            <div className="collection">
    <h2>{name}</h2>
    <span>{username}</span>
    <span>{email}</span>
    <span>{address.city} {address.street}</span>
            </div>

        </div>
    )
}
export default Api;