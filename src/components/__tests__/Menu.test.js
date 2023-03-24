import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import {fireEvent, render, waitFor} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";
import {MENU_DATA} from "../../mocks/data";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {return Promise.resolve(MENU_DATA)}
    });
});

test("Cart Items are updated when we add items from the restaurant menu", async () => {
    const restaurantMenu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => {
        expect(restaurantMenu.getByTestId("menu"));
    });

    const addBtn = restaurantMenu.getAllByTestId("add-btn");

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[4]);

    const cart = restaurantMenu.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart - 2 Items");

    //console.log(addBtn);
});