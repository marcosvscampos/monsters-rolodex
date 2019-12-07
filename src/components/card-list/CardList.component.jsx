import React from 'react';
import './CardList.styles.css';

import Card from '../card/Card.component';

const CardList = ({monsters}) => 
(<div className="card-list">
    {
        monsters.map(monster => { 
            return (<Card key={monster.id} item={monster}/>) 
        })
    }
</div>)

export default CardList;