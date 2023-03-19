import {IMG_CDN_URL} from "../constants";
import {useContext} from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({name, cuisines, lastMileTravelString, cloudinaryImageId}) => {
    const {user} = useContext(UserContext);
    return (
        <div className="w-[200px] p-2 m-2 shadow-lg bg-green-100">
            <img src={ IMG_CDN_URL + cloudinaryImageId } />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
            <h4 className="font-bold text-sm">{user.name}- {user.email}</h4>
        </div>
    );
}

export default RestaurantCard;
