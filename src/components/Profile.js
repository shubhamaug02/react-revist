import {useEffect} from "react";

const Profile = (props) => {

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Namaste Profile UseEffect");
        },1000);

      return () => {
        clearInterval(timer);
      };
    },[]);

    return (
        <div>
            <h1>This is Profile Functional Component</h1>
            <h3>Name: {props.name}</h3>
        </div>
    );
}

export default Profile;