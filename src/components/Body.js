import {restaurantList} from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState}  from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

function filterData(searchText, allRestaurants){
  return allRestaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase()));
}


const Body = () => {
    //const searchTxt = "Dominos"; // when used it's a hardcoded value. won't get updated on change  
    const [searchText,setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState();
    const [allRestaurants, setAllRestaurants] = useState([]);
    //{RestaurantCard(restaurantList[0].data)} // will not be rendered

    
    useEffect(() =>{
      //API Call
      console.log("use effect");
      getAllRestaurants();
    },[]);

    async function getAllRestaurants(){
      let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9879659&lng=77.6895248&page_type=DESKTOP_WEB_LISTING");
      let json = await data.json();

      console.log(json);

      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    if(!allRestaurants) return null;

    if(filteredRestaurants?.length === 0) 
      return <h1>No Restaurants match your Filter</h1>;


    return (allRestaurants.length === 0 ? <Shimmer /> :
       <>
        <div className="search-container">
          <input 
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText} 
            onChange={(e) => 
              setSearchText(e.target.value)
            }
          />
          <button 
            className="search-btn"
            onClick={() => {
              const data = filterData(searchText,allRestaurants);
              setFilteredRestaurants(data);
            }}>
            Search
          </button>
        </div>
         <div className="restaurant-list">
            {/* {RestaurantCard(restaurantList[0].data)} */}
            {
              filteredRestaurants.map(restaurant => {
                return <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                  <RestaurantCard {...restaurant.data} />
                </Link>
              })
            }
            {/* <RestaurantCard {...restaurantList[0].data}/> */}
        </div>
       </>
    );
}

export default Body;