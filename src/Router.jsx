import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./Home";
import Shop from "./Shop";
import Default  from "./Default";
import Cart from "./Cart";
import ErrorPage from "./Error";
const Router = () => {
  const [jewelery, setjewelery]= useState([]);
    useEffect(()=>{
        const apiUrl = 'https://fakestoreapi.com/products/category/jewelery';
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setjewelery(data)
        
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }, []);
    
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Home />,
      children: [
        { index: true, element: <Default jewelery={jewelery}/> },
        { path: "Shop", element: <Shop jewelery={jewelery}/> },
        { path: "Cart", element: <Cart /> },
        
      ],
      errorElement: <ErrorPage />,
    },
    {
      path: "Shop/xx",
      element: <Shop jewelery={jewelery}/>,
      
    },

  ]);

  return <RouterProvider router={router} />;
};

export default Router;