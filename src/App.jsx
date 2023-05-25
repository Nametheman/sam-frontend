// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/landing/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
