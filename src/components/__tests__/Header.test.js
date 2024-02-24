import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import store from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load Header Component with Login Button",()=>{
    render(
    <BrowserRouter>
          <Provider store={store}>
            <Header/>
          </Provider>
    </BrowserRouter>
    );

    const loginButton=screen.getByRole("button",{name:"Login"});

    expect(loginButton).toBeInTheDocument();
})

it("Should load Cart item 0",()=>{
  render(
    <BrowserRouter>
      <Provider store={store}>
          <Header/>
      </Provider>
    </BrowserRouter>
    );

    const cartItem=screen.getByText("Cart (0)");

    expect(cartItem).toBeInTheDocument();
})

it("Should load Cart item",()=>{
  render(
    <BrowserRouter>
      <Provider store={store}>
          <Header/>
      </Provider>
    </BrowserRouter>
    );

    //const cartItems=screen.getByText("Cart (0)");
    const cartItems=screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
})

it("Should Change Login Button to Logout on click",()=>{
  render(
  <BrowserRouter>
        <Provider store={store}>
          <Header/>
        </Provider>
  </BrowserRouter>
  );

  const loginButton=screen.getByRole("button",{name:"Login"});

  fireEvent.click(loginButton);

  const logoutButton=screen.getByRole("button",{name:"Logout"});

  expect(logoutButton).toBeInTheDocument();
})




