import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import ExploreArtwork from "../Pages/Explore Artwork/ExploreArtwork";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import AuthLayout from "../Layout/AuthLayout";
import Loading from "../Pages/Loading/Loading";
import AddArtwork from "../Pages/Add ArtWork/AddArtwork";
import PrivateRoute from "./PrivateRoute";
import MyGallery from "../Pages/My Gallery/MyGallery";
import MyFabourite from "../Pages/My Fabourite/MyFabourite";
import ArtworkDetails from "../Pages/Artwork Detail/ArtworkDetails";
import UpdateArtwork from "../Pages/Update Artwork/UpdateArtwork";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/exploreArtwork",
        Component: ExploreArtwork,
        loader: () => fetch("http://localhost:3000/publicArtwork"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/addArtwork",
        element: (
          <PrivateRoute>
            {" "}
            <AddArtwork></AddArtwork>
          </PrivateRoute>
        ),
      },
      {
        path: "/myGallery",
        element: (
          <PrivateRoute>
            <MyGallery></MyGallery>
          </PrivateRoute>
        ),
      },
      {
        path: "myFavorites",
        element: (
          <PrivateRoute>
            <MyFabourite></MyFabourite>
          </PrivateRoute>
        ),
        
      },
      {
        path: "artworkDetails/:id",
        element: (
          <PrivateRoute>
            <ArtworkDetails></ArtworkDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/publicArtwork/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "updateArtwork/:id",
        element: (
          <PrivateRoute>
            <UpdateArtwork></UpdateArtwork>
          </PrivateRoute>
        ),
         loader: ({ params }) =>
          fetch(`http://localhost:3000/publicArtwork/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
