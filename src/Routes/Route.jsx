import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Error from "../Pages/Error";
import Games from "../Pages/Games";
import Home from "../Pages/Home";
import GameDetails from "../Pages/GameDetails";

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
    ],
  },
]);

export default router;
