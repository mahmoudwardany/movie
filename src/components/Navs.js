import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
const Navs = ({ search }) => {
const onsearch=(word)=>{
  search(word)
}
  
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e)=>onsearch(e.target.value)}  type="text" className="form-control" placeholder="Search ....." />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navs;