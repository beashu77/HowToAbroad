import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import HTA_logDOM from "../asset/images/HTA-logo.webp";
import Home from "./Home";
import Login from "./Login";
import Portal from "./Portal";
import SearchCourse from "./SearchCourse";
import notFound from "../asset/images/page not found.gif"
const NotFound = () => <div>
       <nav className="top-0 w-full pt-5 pb-5 shadow-lg sticky">
        <div className="mx-auto w-[85%]">
          <div className="items-center flex  justify-between">

            <div className="items-center flex h-24 w-full gap-20">
              <Link to="/">
                <div className="flex items-center cursor-pointer">
                  <img src={HTA_logDOM} alt="logo" className="h-24" />
                </div>
              </Link>
              <Link to="/"><h1 className="text-xl">Back to Home</h1></Link>
              
            </div>
          </div>
        </div>
 
      </nav>
  <img className="m-auto" src={notFound} alt="page not found" />
</div>;

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/searchcourse" element={<SearchCourse />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Layout;
