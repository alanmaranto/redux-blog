import React, { Fragment } from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = ({ message }) => {
  return (
    <Fragment>
      <h2 className="center red">{message}</h2>
      <div className="bg-purple">
        <div className="stars">
          <div className="custom-navbar">
            <div className="brand-logo">
              <img
                src="http://salehriaz.com/404Page/img/logo.svg"
                width="80px"
                alt="logo"
              ></img>
            </div>
          </div>
          <div className="central-body">
            <img
              className="image-404"
              src="http://salehriaz.com/404Page/img/404.svg"
              width="300px"
              alt="404"
            ></img>
            <Link
              to="/"
              className="btn-go-home"
            >
              GO BACK HOME
            </Link>
          </div>
          <div className="objects">
            <img
              className="object_rocket"
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
              alt="rockets"
            ></img>
            <div className="earth-moon">
              <img
                className="object_earth"
                src="http://salehriaz.com/404Page/img/earth.svg"
                width="100px"
                alt="earth"
              ></img>
              <img
                className="object_moon"
                src="http://salehriaz.com/404Page/img/moon.svg"
                width="80px"
                alt="moon"
              ></img>
            </div>
            <div className="box_astronaut">
              <img
                className="object_astronaut"
                src="http://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
                alt="astronaut"
              ></img>
            </div>
          </div>
          <div className="glowing_stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Error;
