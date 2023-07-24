import { useState } from 'react'
import Card from './Card'

function Cards(){
    const [items, setItems] = useState([
        {id : 1, img: 'img/druid.png', stat: "" },
        {id : 1, img: 'img/druid.png', stat: "" },
        {id : 2, img: 'img/mage.png', stat: "" },
        {id : 2, img: 'img/mage.png', stat: "" },
        {id : 3, img: 'img/paladin.png', stat: "" },
        {id : 3, img: 'img/paladin.png', stat: "" },
        {id : 4, img: 'img/priest.png', stat: "" },
        {id : 4, img: 'img/priest.png', stat: "" },
        {id : 5, img: 'img/rogue.png', stat: "" },
        {id : 5, img: 'img/rogue.png', stat: "" },
        {id : 6, img: 'img/shaman.png', stat: "" },
        {id : 6, img: 'img/shaman.png', stat: "" },
        {id : 7, img: 'img/warlock.png', stat: "" },
        {id : 7, img: 'img/warlock.png', stat: "" },
        {id : 8, img: 'img/warrior.png', stat: "" }, 
        {id : 8, img: 'img/warrior.png', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }


    function handleClick(id){
        if(prev === -1){
            setPrev(id)
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }
        
    return (
        <div className="container">
            {items.map((item, index) => (
                <Card key={index} item ={item} id={index} handleClick={handleClick}/>
            ))}
        </div>        
    )
}

export default Cards;