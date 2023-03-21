import {useSelector} from "react-redux";
import FoodItem from "./FoodItem";
import {useDispatch} from "react-redux";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <h1 className="font-bold text-3xl">
            Cart Items - {cartItems.length}
            </h1>
            <button className="p-2 m-2 bg-green-200" onClick={() => handleClearCart()}>ClearCart</button>
            <div className="flex">{cartItems.map(cartItem => <FoodItem key={cartItem.id} {...cartItem}/>)}</div>
        </div>
    );
}

export default Cart;