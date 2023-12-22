import { createBrowserRouter  } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CreateNewTask from "../Pages/Dashboard/CreateNewTask";
import PreviousTasks from "../Pages/Dashboard/PreviousTasks";
import PrivateRoutes from "./PrivateRoutes";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Profile from "../Pages/Dashboard/Profile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
                path: '/',
                element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
          },
          {
            path: "/register",
            element: <Register></Register>
          },
          {
            path: "/aboutUs",
            element: <AboutUs></AboutUs>
          },
          {
            path: "/contactUs",
            element: <ContactUs></ContactUs>
          },
          {
            path: "/dashboard",
            element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
            children:[
              {
                path: "profile",
                element: <Profile></Profile>
              },
              {
                path: "newTask",
                element: <CreateNewTask></CreateNewTask>
              },
              {
                path: "previousTasks",
                element: <PreviousTasks></PreviousTasks>
              },
            ]
          },
      ]
    },
  ]);