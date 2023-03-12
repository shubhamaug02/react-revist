import {useState, useEffect} from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {

        const handleOnline = () => {
            setIsOnline(true);
        }

        const handleOffline = () => {
            setIsOnline(false);
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        //must clean the event listener inorder to avoid them listening when changing the page/route
        
        return () =>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        };
    },[]);

    return isOnline;
}

export default useOnline;