import {restaurantList} from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext}  from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {filterData} from "../utils/helper";
import useRestaurants from "../utils/useRestaurants";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import {FETCH_RESTAURANTS_URL} from "../constants";
 
const Body = () => {
    //const searchTxt = "Dominos"; // when used it's a hardcoded value. won't get updated on change  
    const [searchText,setSearchText] = useState("");
    //const [allRestaurants,filteredRestaurants, setFilteredRestaurants] = useRestaurants();
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
    console.log(allRestaurants);

    const isOnline = useOnline();

    if(!isOnline){
      return <h1>Offline, please check your internet !!! </h1>
    }
    if(!allRestaurants) return null;

    if(filteredRestaurants?.length === 0) 
      return <h1>No Restaurants match your Filter</h1>;

    const {user,setUser} = useContext(UserContext);

    return (allRestaurants.length === 0 ? <Shimmer /> :
       <>
        <div className="p-5 my-2 bg-green-100 shadow-md">
          <input 
            type="text"
            className="search-input focus:bg-gray-200"
            data-testid="search-input"
            placeholder="Search"
            value={searchText} 
            onChange={(e) => 
              setSearchText(e.target.value)
            }
          />
          <button 
            className="p-2 m-2 bg-yellow-200 rounded-md hover:bg-green-600"
            data-testid="search-btn"
            onClick={() => {
              const data = filterData(searchText,allRestaurants);
              setFilteredRestaurants(data);
            }}>
            Search
          </button>
          <input className="mx-2" value={user.name} onChange={e => {
              setUser({
              ...user,
              name: e.target.value
            })
          }} />
          <input value={user.email} onChange={e => {
              setUser({
              ...user,
              email: e.target.value
            })
          }} />
        </div>
         <div className="restaurant-list flex flex-wrap" data-testid="res-list">
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