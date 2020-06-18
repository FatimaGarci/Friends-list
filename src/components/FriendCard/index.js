import React from 'react';
import "./style.css";


const FriendCard = (props) => {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name: {props.name}</strong>
                    </li>
                    <li>
                        <strong>Occupation: {props.occupation} </strong>
                    </li>
                    <li>
                        <strong>Location: {props.location} </strong>
                    </li>
                </ul>
            </div>
            <span onClick={()=> props.removeFriend(props.id)} className="remove">X</span>
        </div>
    )
}


export default FriendCard;