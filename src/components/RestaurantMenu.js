import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const params = useParams();
    const {resId} = params;
    const [restaurant,setRestaurant] = useState();

    useEffect(() => {
        getRestaurantInfo();
    },[]);

   
    async function getRestaurantInfo(){
        const restaurant = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9879659&lng=77.6895248&restaurantId=" + resId);
        const json = await restaurant.json();
        console.log(json);
        setRestaurant(json.data);
    }

    return (!restaurant ? <Shimmer /> :
        <div className="menu">
            <div>
                <h2>RestaurantMenu</h2>
                <h2>RestaurantId : {resId}</h2>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.name}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.locality}</h3>
                <img alt="Restaurant" src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
                }/> 
                <h3 className="menu">{restaurant?.cards[0]?.card?.card?.info?.avgRatingString} stars</h3>
            </div>
            <div>
                <h3>Recommended Menu</h3>
                {console.log(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards)}
                <ul>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((category,index)=> 
                    <li key={index}>{category?.card?.info?.name}</li>)}</ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;