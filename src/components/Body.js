import {restaurantList} from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState}  from "react";

function filterData(searchText, restaurants){
  return restaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
}

const Body = () => {
    //const searchTxt = "Dominos"; // when used it's a hardcoded value. won't get updated on change  
    const [searchText,setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

    //{RestaurantCard(restaurantList[0].data)} // will not be rendered
    return (
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
              const data = filterData(searchText,restaurants);
              setRestaurants(data);
            }}>
            Search
          </button>
        </div>
         <div className="restaurant-list">
            {/* {RestaurantCard(restaurantList[0].data)} */}
            {
              restaurants.map(restaurant => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
              })
            }
            {/* <RestaurantCard {...restaurantList[0].data}/> */}
        </div>
       </>
    );
}

export default Body;