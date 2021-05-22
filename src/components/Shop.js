import React, {useState, useEffect} from 'react';

const Shop = () => {
    

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch ('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res=>{
            return res.json
        })
        .then(itemData =>{
            setItems(itemData)
        })
    },[]);

    
    // const fetchItems = async ()=>{
    //     const data = await fetch(
    //         'https://pokeapi.co/api/v2/pokemon/ditto'
    //         );

    //         const items = await data.json();
    //         setItems(items.items);
    // };

    

    return (
        <div>
            <p>Loading the data</p>...

           {
           items.map(item =>(
               <h1>{item.name}</h1>
           ))}
        </div>
    );
}

export default Shop
