import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Error from "../Pages/Error";
import GameDetails from "../Pages/GameDetails";
import Games from "../Pages/Games";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/games",
        Component: Games,
      },
      {
        path: "/games/:id",
        Component: GameDetails,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
