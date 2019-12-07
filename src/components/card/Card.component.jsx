import React from 'react';
import './Card.styles.css';

const Card = ({item}) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${item.id}?set=set2&size=180x180`} />
        <h1>{item.name}</h1>
        <p>{item.email}</p>
    </div>
)


export default Card;