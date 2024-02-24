import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/RestaurantMenuMockData.json"
import { Provider } from "react-redux"
import store from "../../utils/store"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should load Restaurant Menu Component",async ()=>{
    await act(async ()=>{
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    })

    const recommendedPanel=screen.getByText("Recommended (20)");

    fireEvent.click(recommendedPanel);

    const restaurantItems=screen.getAllByTestId("resMenu");

    const addButton=screen.getAllByRole("button",{name:"ADD"});

    fireEvent.click(addButton[0]);
    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    fireEvent.click(addButton[1]);
    expect(screen.getByText("Cart (2)")).toBeInTheDocument();
    
    expect(screen.getAllByTestId("resMenu").length).toBe(22);

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

    expect(screen.getAllByTestId("resMenu").length).toBe(20);
    
    
})