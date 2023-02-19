import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// This is not a normal js file. it is the file having the react. 
/*
const heading = React.createElement("h1", 
{
    id: "title",
    key: "h1"
},
"This text is written using React Library"); // react overrides the content for element with same tag

const heading2 = React.createElement("h2", {
    id: "heading2",
    key: "h2"
}, "This is an h2 element inserted through react.");

const container = React.createElement("div", {
    id: "container"
}, 
[heading, heading2]); // we can pass as an array of children for multiple elements

console.log(heading);
*/

// JSX
const container = (
    <div id="container">
        <h1 id="title" key="h1">This Text is written using react and JSX</h1>
        <h2 id="heading2" key="h2">An h2 element tag using react and JSX</h2>
    </div>
);

/*
  Header
    -Logo
    -Nav items
  Body
    -Search bar
    -Restaurant list
     -restaurant cards(many cards)
      -image
      -name
      -rating
      -cuisanes
  Footer
    -links
    -copyright
*/


// const kantiSweets = {
//     imageUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cppsfgqvgxzeyi1qerep",
//     name: "Kanti Sweets",
//     cuisines: ["Sweets", "Snacks"],
//     rating: "4.6"
// };


const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);