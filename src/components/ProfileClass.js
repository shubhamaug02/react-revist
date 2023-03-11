import {Component} from "react";

class Profile extends Component {
    constructor(props){
        super(props); // why we do call super at line no. 1
        this.state={
           userInfo:{
                name: "Dummy Name",
                location: "Dummy Location"
           }
        }

       
       // console.log("constructor - Profile(Child Component) " + this.props.name);
        // console.log(this);
        // console.log(this.state);
    }

    async componentDidMount() {
        // const data = await fetch("https://api.github.com/users/shubhamaug02");
        // const json = await data.json();

        // console.log(json);
        // this.setState({
        //     userInfo: json
        // });
        this.timer = setInterval(()=>{
            console.log("Namaste from Jabalpur ");
        },1000);
        //console.log("componentDidMount - Profile(Child Component) " + this.props.name);
    }


    componentDidUpdate(){
        //console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("component Will Unmount");
    }

    render(){
        //console.log("render - Profile(Child Component) " + this.props.name);
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h3>Name: {this.state.userInfo.name}</h3>
                <img src={this.state.userInfo.avatar_url} />
                <h3>Location: {this.state.userInfo.location}</h3>
                {/* <h3>Count: {this.state.count}</h3> */}
            </div>
        )
    }
}

/**
 * Console log sequence from Life Cycle Methods with API call
 * 
 *  Constructor - Parent
 *  Render - Parent
 *    Constructor - First Child
 *    Render - First Child
 *  
 *   DOM Update
 *   
 *   //ComponentDidMount called but its async and have an api call and no consoles before
 *   API Call
 *  ComponentDidMount -Parent
 *   API Response consolelog
 *    ComponentDidMount -Child
 * 
 *  Render- First Child // because of setState 
 * 
 *  ComponentDidUpdate -- after every Render
 *    
 */

export default Profile;