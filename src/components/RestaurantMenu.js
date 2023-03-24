import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {addItem} from "../utils/cartSlice";
import {useDispatch} from "react-redux";

const RestaurantMenu = () => {
    const params = useParams();
    const {resId} = params;
    // const [restaurant] = useState();

    const restaurant = useRestaurantMenu(resId);

    const dispatch = useDispatch();

    // const handleAddItem = () => {
    //     dispatch(addItem("Grapes"));
    // } 

    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }
    return (!restaurant ? <Shimmer /> :
        <div className="menu flex">
            <div>
                <h2>RestaurantMenu</h2>
                <h2>RestaurantId : {resId}</h2>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.name}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.locality}</h3>
                <img alt="Restaurant" src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
                }/> 
                <h3 className="menu">{restaurant?.cards[0]?.card?.card?.info?.avgRatingString} stars</h3>
                {/* <button className="p-2 m-2 bg-green-200" onClick={() => handleAddItem()}>Add Item</button> */}
            </div>
            <div className="p-2 m-2">
                <h3>Recommended Menu</h3>
                {console.log(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.
                itemCards)}
                {/* <ul>
                    <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.
                itemCards.map(item => addFoodItem(item?.card?.info))}</li>
                </ul> */}

                <ul data-testid="menu">{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.
                itemCards?.map((itemObj,index)=> 
                    <li key={index}>
                        {itemObj?.card?.info?.name} -{" "}
                        <button data-testid="add-btn" className="p-1 bg-green-50" onClick={() => addFoodItem(itemObj?.card?.info)}>Add</button>
                    </li>)}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;