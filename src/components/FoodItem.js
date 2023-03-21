import {IMG_CDN_URL} from "../constants";

const FoodItem = ({name, imageId, price, description}) => {
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-green-100">
            <img src={IMG_CDN_URL+ imageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{description}</h3>
            <h3>Rupees - {price/100}</h3>
        </div>
    );
}

export default FoodItem;