import React from "react";

import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { useNavigate, Outlet } from "react-router-dom";
import Footergeneral from "../../component/LandingFooter.jsx";

const LandingNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="card flex justify-content-between text-white-alpha-90 bg-primary-900   p-2">
        <div className="pl-5">
          <Image
            alt="logo"
            src="https://primefaces.org/cdn/primereact/images/logo.png"
            height="40"
            className=""
          ></Image>
        </div>
        <div className="flex justify-content-center items-center">
          <Button
            onClick={() => navigate("/login")}
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-900  border-primary-900 mr-2 p-button font-bold"
          >
            <i className="mr-2 mb-1 fa-solid fa-user text-white"></i> Login
          </Button>
          <Button
            onClick={() => navigate("/register")}
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-900  border-primary-900 mr-2 p-button font-bold"
          >
            <i className="mr-2 mb-1 fa-solid fa-plus text-white"></i> Register
          </Button>
        </div>
      </div>
      <Outlet />
      <Footergeneral />
    </>
  );
};

export default LandingNavbar;
