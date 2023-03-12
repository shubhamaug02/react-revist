import {useState, useEffect} from "react";
import {FETCH_RESTAURANTS_URL} from "../constants";

const useRestaurants = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState();
    //{RestaurantCard(restaurantList[0].data)} // will not be rendered

    useEffect(() =>{
      //API Call
      console.log("use effect");
      getAllRestaurants();
    },[]);

    async function getAllRestaurants(){
      let data = await fetch(FETCH_RESTAURANTS_URL);
      let json = await data.json();

      console.log(json);

      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    return [allRestaurants,filteredRestaurants,setFilteredRestaurants];
}

export default useRestaurants;
