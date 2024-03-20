import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomeScreen from "./pages/HomeScreen";
import ProductDetails from "./pages/ProductDetails.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product" element={<ProductDetails />} />
      {/*  <Route path="/product/:id" element={<ProductScreen />} /> */}
      {/*  <Route path="/cart" element={<CartScreen />} /> */}
    </Route>
  )
);

async function deferRender() {
  const { worker } = await import("./mocks/browser.js");
  return worker.start();
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
