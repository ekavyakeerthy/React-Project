import "./style.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/Header/Header";
import HeroSection from "./component/HeroSection/HeroSection";
import Footer from "./component/Footer/Footer";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import ProductLayout from "./component/ProductLayout/ProductLayout";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import TermsAndConditions from "./component/TermsandConditions/TermsandConditions";

const AppLayout = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductLayout />
      <Footer />
    </>
  );
};

const ProductsPageLayout = () => {
  return (
    <>
      <Header />
      <ProductLayout />
      <Footer />
    </>
  );
};

const ProductDetailsLayout = () => {
  return (
    <>
      <Header />
      <ProductDetails />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products",
    element: <ProductLayout />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditions />,
  },

  {
    path: "/products/:id",
    element: <ProductDetailsLayout />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default AppLayout;