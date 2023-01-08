import React from "react";
import ReactDOM from "react-dom/client";
// This is not a normal js file. it is the file having the react. 
const heading = React.createElement("h1", {
    id: "title"
},"This text is written using React Library"); // react overrides the content for element with same tag

const heading2 = React.createElement("h2", {
    id: "heading2"
}, "This is an h2 element inserted through react.");

const container = React.createElement("div", {
    id: "container"
}, [heading, heading2]); // we can pass as an array of children for multiple elements

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);