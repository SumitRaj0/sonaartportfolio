import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactForm from "./components/ContactForm";

function App() {
  // Function to check if the device is mobile or tablet
  const isMobileOrTablet = () => {
    return window.matchMedia("(max-width: 1024px)").matches; // Adjust the width as needed
  };

  const appRouting = createBrowserRouter([
    {
      path: "/", // The default route
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <ContactForm />,
    },
  ]);

  return (
    <div className="App">
      {isMobileOrTablet() ? (
        <RouterProvider router={appRouting} />
      ) : (
        <div className="desktop-message">
          <h2>Sorry! 🙁 This app is currently only available for mobile and tablet devices. 📱💻</h2>
        </div>
      )}
    </div>
  );
}

export default App;
