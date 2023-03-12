import {useState, useEffect} from "react";
import {FETCH_MENU_URL} from "../constants";

const useRestaurantMenu = (resId) => {
    console.log("here")
    const [restaurant, setRestaurant] = useState();

    useEffect(() => {
        getRestaurantInfo();
    },[]);

   
    async function getRestaurantInfo(){
        const restaurant = await fetch(FETCH_MENU_URL + resId);
        const json = await restaurant.json();
        console.log(json);
        setRestaurant(json.data);
    }

    return restaurant;
}

export default useRestaurantMenu;