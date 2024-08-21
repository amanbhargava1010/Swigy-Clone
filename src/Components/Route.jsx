/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./Contact";
import Body from "./Body";
import Header from "./Header";
import RestaurantMenu from "./ResturantMenu";
import Error from "./Error";
import { lazy, Suspense } from "react";
// import { Provider } from "react-redux";
import Cart from "./Cart";


const Grocery = lazy(() => import("./Grocery")); 
const About = lazy(() => import("./About"));
 
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet/>
    </>
    ),

    children: [
      {
        path: '/',
        element: <Body />,
        
    },
      {
        path: "/about",
        element: <Suspense fallback={<h2>Loading....</h2>}> <About/>  </Suspense> ,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurantMenu/>
      },
      {
        path: "/grocery",
        element : <Suspense fallback={<h1>Loading .....</h1>}><Grocery/></Suspense>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  },
])

function route() {
  return <RouterProvider router={router} />
}

export default route;

