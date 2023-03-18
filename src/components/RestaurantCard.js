import {IMG_CDN_URL} from "../constants";

const RestaurantCard = ({name, cuisines, lastMileTravelString, cloudinaryImageId}) => {
    
    return (
        <div className="w-[200px] p-2 m-2 shadow-lg bg-green-100">
            <img src={ IMG_CDN_URL + cloudinaryImageId } />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    );
}

export default RestaurantCard;
