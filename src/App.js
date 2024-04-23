import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";
import { useLocation } from "react-router-dom";
import Loader from "./components/Loader";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const showNavbarAndFooter =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/portal" ||
    location.pathname === "/searchcourse";

  return (
    <div className="font-figtreeRegular">
      {loading ? (
        <Loader />
      ) : (
        <>
          {showNavbarAndFooter && <Navbar />}
          <Layout />
        </>
      )}
    </div>
  );
}

export default App;
