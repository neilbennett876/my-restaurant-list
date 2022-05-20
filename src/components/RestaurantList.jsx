import React, { useEffect, useState } from "react";
import { Col, Row, Card } from "antd"

function RestaurantList () {
    const [restaurants, setRestaurants] = useState()
    useEffect(()=>{
        
        //fetch our API
        fetch("https://my-first-firestore-nb.web.app/restaurants")
        .then(response => response.json())
        .then(data => {setRestaurants(data)})
        .catch(console.error)
    }, [])
        //data -> goes into restaurants
 
    return (
        <section>
            <Row guter={16}>
            {!restaurants
            ? <h2>Loading..</h2>
            : restaurants.map(restaurant => (
                <Col style={{width: '300px'}} key={restaurant.id}>
                    <Card
                    title={restaurant.name}
                    hoverable
                    >
                        <p>{restaurant.address}</p>
                    </Card>
                </Col>
                )
                
                )}
                </Row>
                </section>
    )
}
//DONT FORGET THE KEY

export default RestaurantList