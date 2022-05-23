import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import  RestaurantCard  from "./RestaurantCard"

export default function RestaurantPage() {
const { restaurantsID } = useParams()
const [restaurant, setRestaurant] = useState()
useEffect(()=> {
    //fetch restaurant by ID
    fetch(`https://my-first-firestore-nb.web.app/restaurants/${restaurantsID}`)
    .then(response => response.json())
    .then(data => setRestaurant(data))
    .catch(console.error)
}, [restaurantsID])
    return(
    <>
    <Link to='/'>&lt;</Link>
    (<RestaurantCard restaurant={restaurant} />
    </> 
    )
}