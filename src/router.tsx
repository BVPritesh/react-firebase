import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "@layouts/DefaultLayout";
import PageNotFound from "@pages/PageNotFound";
import Home from "@pages/Home";
import About from "@pages/About";
import Blogs from "@pages/Blogs";
import RealTimeUser from "@pages/RealTimeUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blogs", element: <Blogs /> },
      { path: "realtime-users", element: <RealTimeUser /> },      
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);