import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomeScreen from "./pages/HomeScreen";
import ProductDetails from "./pages/ProductDetails.js";
import CartScreen from "./pages/CartScreen.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Shipping from "./pages/Shipping.js";
import PaymentMethod from "./pages/PaymentMethod.js";
import PlaceOrder from "./pages/PlaceOrder.js";
import OrderSummary from "./pages/OrderSummary.js";
import PostScreen from "./pages/PostApp/PostScreen.js";
import SinglePostPage from "./pages/PostApp/SinglePostPage.js";
import EditPostForm from "./pages/PostApp/EditPostForm.js";
import ReduxApp from "./pages/ReduxApp/ReduxApp.js";

import store from "./store";
import { Provider } from "react-redux";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/details" element={<ProductDetails />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/payment" element={<PaymentMethod />} />
      <Route path="/placeorder" element={<PlaceOrder />} />
      <Route path="/ordersummary" element={<OrderSummary />} />
      <Route path="/post" element={<PostScreen />} />
      <Route exact path="/posts/:postId" element={<SinglePostPage />} />
      <Route exact path="/editPost/:postId" element={<EditPostForm />} />
      <Route exact path="/redux" element={<ReduxApp />} />
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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
});
