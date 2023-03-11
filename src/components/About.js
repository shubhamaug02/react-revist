import {Outlet} from "react-router-dom";
import {Component} from "react";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";

class About extends Component{
    constructor(){
      super();
      console.log("Constructor - About(Parent Component)");
    }

    componentDidMount(){
      console.log("componentDidMount - About(Parent Component)");
    }

    render() {
      console.log("render - About(Parent Component)");
      return(
        <>
          <h1>About Us</h1>
          <h2>Food Villa is a one centre for all types of food and serving since 2000.</h2>
          {/* {<Outlet /> } */}
          {/* <Profile name={"First Child"} xyz="abc"/> */}
          {/* <Profile name={"Second Child"} xyz="abc"/> */}
          {<ProfileFunctionalComponent />}
        </>
      );
    }
}


/**
 * React Life Cycle Methods function execution
 * 
 *  Constructor - Parent
 *  Render - Parent
 *    Constructor - First Child
 *    Render - First Child
 *    Constructor - Second Child // React batches the render phase for child
 *    Render - Second Child
 *    
 *    DOM Update
 * 
 *    ComponentDidMount - First Child
 *    ComponentDidMount - Second Child
 *  ComponentDidMount - Parent
 */

export default About;