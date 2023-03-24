/**
 * 
 * 3 test case from the video
 * 
 * 1.When Header component loads our logo should load
 * 2. When Header loads our online status should be green.
 * 3. When Header loads cart items should be 0
 * 
 * 
 * -------------------
 * 
 *  1st step is to render Header component in jsdom
 */

import {render} from "@testing-library/react";
import Header from "../Header";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

 test("Logo should load when Header is rendered", () => {

    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>)
        </StaticRouter>
    );

    const logo = header.getAllByTestId("logo");
    console.log(logo);

    expect(logo[0].src).toBe("http://localhost/dummy.png");
 });


 test("Online status should be green when Header is rendered", () => {

    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>)
        </StaticRouter>
    );

    const isOnline = header.getByTestId(("isOnline"));
    console.log(isOnline);

    expect(isOnline.innerHTML).toBe("✅");
 });


 test("Cart items should be zero when Header is rendered for the first time", () => {

    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>)
        </StaticRouter>
    );

    const cart = header.getByTestId(("cart"));
    console.log(cart);

    expect(cart.innerHTML).toBe("Cart - 0 Items");
 });
