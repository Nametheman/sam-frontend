// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/landing/Home";
import About from "./pages/about/About";
import PMB from "./pages/pmb/Home";
import Adashi from "./pages/adashi/Adashi";
import Others from "./pages/other_projects/Others";
import Yellow from "./pages/yellow_card/Yellow";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects/pmb",
        element: <PMB />,
      },
      {
        path: "/projects/yellow-card",
        element: <Yellow />,
      },
      {
        path: "/projects/adashi",
        element: <Adashi />,
      },
      {
        path: "/projects/other-projects",
        element: <Others />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <h1>hi</h1>
    </>
  );
}

export default App;
