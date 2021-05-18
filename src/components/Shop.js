import React, {useState, useEffect} from 'react';

const Shop = () => {
    
    useEffect(()=>{
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    
    const fetchItems = async ()=>{
        const data = await fetch(
            'https://pokeapi.co/api/v2/ability/'
            );

            const items = await data.json();
            setItems(items.items);
    };

    

    return (
        <div>
           {items.map(item =>(
               <h1>{item.name}</h1>
           ))}
        </div>
    );
}

export default Shop
