import React from "react";
import ReactDOM from "react-dom/client";
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


const Title = () => (<div>
        <h1>This is a Title Component</h1>
    </div>);

//Functional Component

const HeaderComponent = () => {
    return (<div id="container">
        {container}
        {Title()} 
        <h1>An h1 inside the Functional Component</h1>
        <h2> An h2 inside the Functional Component</h2>
    </div>);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);