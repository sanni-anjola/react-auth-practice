import { useRoutes } from "react-router-dom";
import React from "react";
import Home from "./../components/Home/Home";
import Auth from "../components/Auth/Auth";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);
};

export default Routes;
