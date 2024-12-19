import React from "react";
import ImgCom from "/src/assets/ImgCom.png";
import { Container, Form, FormControl, Image } from "react-bootstrap";
import {
  FaPlus,
  FaHome,
  FaBell,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import "./Header.css"; 

const Header = () => {
  return (
    <div className="header-container shadow-sm py-2 bg-white">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <div className="d-flex align-items-center">
          <div className="image me-3">
            <img src={ImgCom} alt="img" height="40px" />
          </div>
          <Form className="d-none d-md-flex align-items-center">
            <FormControl
              type="search"
              placeholder="Find alumni"
              className="rounded-pill"
              aria-label="Search"
            />
          </Form>
        </div>
        <div className="sub-header">
        <div className="middle d-flex align-items-center">
          <a href="#" className="text-dark mx-2">
            <FaPlus size={20} />
          </a>
          <a href="#" className="text-primary mx-2">
            <FaHome size={20} />
          </a>
          <a href="#" className="text-dark mx-2">
            <FaBell size={20} />
          </a>
          <a href="#" className="text-dark mx-2">
            <FaEnvelope size={20} />
          </a>
          <a href="#" className="text-dark mx-2">
            <FaCalendarAlt size={20} />
          </a>
        </div>
        <div className="right-side-header">
          {/* Profile */}
          <div className="d-flex align-items-center mx-2">
            <Image
              src="https://via.placeholder.com/30"
              roundedCircle
              className="me-2 profile-img"
            />
            <span className="fw-bold text-dark d-none d-md-inline">
              Wade Warren
            </span>
            <i class="down-icon fa-solid fa-angle-down"></i>
          </div>
          </div>
          </div>
      </Container>
    </div>
  );
};

export default Header;
