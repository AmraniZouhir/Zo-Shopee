import React from "react";
import Home from "./pages/Home";
import Header from "./commponents/Header";
import Foter from "./commponents/Foter";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Carte from "./pages/Carte";
import { prodactData } from "./api/Apis";
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Foter />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:prodactData
      },
      {
        path: "/Cart",
        element: <Carte />,
      },

    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
