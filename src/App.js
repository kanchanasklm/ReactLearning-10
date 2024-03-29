import React from "react";

import ReactDOM from "react-dom/client";  

import Header from "./components/Header";

import Body from "./components/Body";

import Footer from "./components/Footer";

import About from "./components/About";

import Error from "./components/Error";

import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

import Contact from "./components/Contact";

import RestaurantMenu from "./components/RestaurantMenu";

import Profile from "./components/Profile";



/**
             * Header
             *   -Logo
             *   -NavItems
             *   -Cart
             *   
             *   Body
             *     -SearcHbar
             *     -restaurantList
             *     -restaurantCard
             *       -Image
             *       -Name
             *       -Rating
             *       -Cuisines
             * 
             *    Footer
             *     -Links 
             *     -CopyRights
             * 
             *  
             * 
             */ 






const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <Outlet/>
            <Footer/>
            </>
            
        
    );
};

const appRouter=createBrowserRouter([
    {
    path: "/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
        {
        path:"/",
        element:<Body/>,
    },
    {
        path:"/about",
        element:<About/>,
        children:[
            {
                path:"Profile",
                element:<Profile/>,
            },
        ]
    },
    {
        path:"/contact",
        element:<Contact/>,
    },
    {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
    },
    ]
    },

    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

