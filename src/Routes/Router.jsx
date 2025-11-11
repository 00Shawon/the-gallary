import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import ExploreArtwork from "../Pages/Explore Artwork/ExploreArtwork";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import AuthLayout from "../Layout/AuthLayout";
import Loading from "../Pages/Loading/Loading";

export const router =  createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {
        index:true,
        Component:Home,

      },
      {
        path:'/exploreArtwork',
        Component:ExploreArtwork,
        loader: () => fetch('http://localhost:3000/publicArtwork'),
        hydrateFallbackElement: <Loading></Loading>
      }
    ]
  },
  {
    path:'auth',
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:'login',
        element: <Login></Login>,
       
      },
      {
        path:'signup',
        element: <Signup></Signup> 
      },
    ]
  },
  {
    path:'/*',
    Component: Error ,
  },
])