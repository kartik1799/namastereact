import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { Outlet, RouterProvider, useParams } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerRes from "./components/ShimmerRes";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

const Grocery=lazy(()=>import("./components/Grocery"));

const Footer=()=>{
    return (
        <div className="footer">
            Footer
        </div>
    )
}

const AppLayout=()=>{

  const [userName,setUserName]=useState("");

    return (
      <Provider store={store}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
            <div className="App">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
      </Provider>
    )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>},
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    },
    {
      path:"/grocery",
      element:<Suspense fallback={<ShimmerRes/>}><Grocery/></Suspense>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    ],
    errorElement:<Error/>
  }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
