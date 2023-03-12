import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";

// import Instamart from "./components/Instamart";

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


/**
 * All mean the same thing
 * 
 * Chunking
 * Code Splitting
 * Dynamic Bundling
 * Lazy Loading
 * On Demand Loading
 * Dynamic Import
 * 
 */

const Instamart = lazy(()=> import("./components/Instamart"));

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element: <About />,
                children:[{
                    path : "profile",
                    element: <Profile />
                 }
                ],
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                )
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);