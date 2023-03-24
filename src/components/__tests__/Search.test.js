import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";
import {RESTAURANT_DATA} from "../../mocks/data";


//defining the fetch for the jsdom. fetch is a function from the browser
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {return Promise.resolve(RESTAURANT_DATA)}
    });
});


test("Search results in Homepage",()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
        );

        const shimmer = body.getByTestId("shimmer");
        //expect(shimmer).toBeInTheDocument();// some way to check if shimmer is loaded but not a good way

        expect(shimmer.children.length).toBe(10);

        console.log(shimmer);
});

test("Restaurant list should show up when Homepage loads", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
        );

        //skippig shimmer -- waiting for it to get passed in the page. as we are checking search we want until search button comes
        // up in screen 
        await waitFor(() => expect(body.getByTestId("search-btn")));

        const resList = body.getByTestId("res-list");

        expect(resList.children.length).toBe(15);

        console.log(resList);
});

test("Search Restaurant with input = Burger", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
        );

        //skippig shimmer -- waiting for it to get passed in the page. as we are checking search we want until search button comes
        // up in screen 
        await waitFor(() => expect(body.getByTestId("search-btn")));

        const input = body.getByTestId("search-input");
        
        //simulated typing the Sri in input and onChange event
        fireEvent.change(input, {
            target: {
                value: "Burger"
            }
        });

        const searchBtn = body.getByTestId("search-btn");

        //simulating the onClick event on search button
        fireEvent.click(searchBtn);

        const resList = body.getByTestId("res-list");

        expect(resList.children.length).toBe(2);
});