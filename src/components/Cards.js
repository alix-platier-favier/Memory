import { useState } from 'react';
import Card from './Card';

function Cards(){
    const [items, setItems] = useState([
        {id : 1, img: 'img/druid.png', stat: ""},
        {id : 1, img: 'img/druid.png', stat: ""},
        {id : 2, img: 'img/mage.png', stat: ""},
        {id : 2, img: 'img/mage.png', stat: ""},
        {id : 3, img: 'img/paladin.png', stat: ""},
        {id : 3, img: 'img/paladin.png', stat: ""},
        {id : 4, img: 'img/priest.png', stat: ""},
        {id : 4, img: 'img/priest.png', stat: ""},
        {id : 5, img: 'img/rogue.png', stat: ""},
        {id : 5, img: 'img/rogue.png', stat: ""},
        {id : 6, img: 'img/shaman.png', stat: ""},
        {id : 6, img: 'img/shaman.png', stat: ""},
        {id : 7, img: 'img/warlock.png', stat: ""},
        {id : 7, img: 'img/warlock.png', stat: ""},
        {id : 8, img: 'img/warrior.png', stat: ""}, 
        {id : 8, img: 'img/warrior.png', stat: ""}
    ]);
        
    return (
        <div className="container">
            {items.map(item => (
                <Card />
            ))}
        </div>        
    )
}

export default Cards;