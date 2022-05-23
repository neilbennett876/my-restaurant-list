import React, { useEffect, useState } from "react";
import { Row } from "antd"
import RestaurantCard from "./RestaurantCard";


function RestaurantList () {
    const [restaurants, setRestaurants] = useState()
    useEffect(()=>{
        
        //fetch our API
        fetch("https://my-first-firestore-nb.web.app/restaurants/{")
        .then(response => response.json())
        .then(data => setRestaurants(data))
        .catch(console.error)
    }, [])
        //data -> goes into restaurants
 
    return (
        <section style={{marginTop: '60px' }}>
            <Row guter={16}>
            {!restaurants
            ? <h2>Loading..</h2>
            : restaurants.map(restaurant => <RestaurantCard restaurant={restaurant} key={restaurant.id}/>)}
                </Row>
                </section>
    )
}
//DONT FORGET THE KEY

export default RestaurantList