import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Hamburger() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="bruh" onClick={handleShow}>
        <div className="container">
          <div className="bar1"></div>
          <div className="bar1"></div>
          <div className="bar1"></div>
        </div>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="lol1">
            <ul className="lol2">
              <li className="collection">
                <Link to="/">home</Link>
              </li>
              <li className="collection">
                <Link to="/silver">silver collection</Link>
              </li>
              <li className="collection">
                <div className="inner">
                  <Link to="/platinum">platinum collection</Link>
                </div>
              </li>
              <li className="collection">
                <div className="inner">
                  <Link to="/gold">gold collection</Link>
                </div>
              </li>
              <li className="collection">
                <a href="https://www.google.co.in/">ruby collection</a>
              </li>
              <li className="collection2">create</li>
              <li className="collection2">login</li>
              <li className="collection2">about</li>
              <li className="collection2">contact</li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Hamburger;
