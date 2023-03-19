import {useContext} from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext);
    return (
        <h2 className="p-5 font-bold text-xl">
            This website is developed by {user.name} -{user.email}
        </h2>
    );
}

export default Footer;