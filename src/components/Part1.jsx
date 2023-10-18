import React from "react";
import pan from "../components/imgs/pan.svg";
import logo from "../components/imgs/shopping-online.jpg";
import { Navbar } from "react-bootstrap";
const Part1 = () => {
  return (
    <Navbar className="lawla">
      <img src={logo} alt="" />
      <img id="A" src={pan} alt="" />
      
    </Navbar>
  );
};

export default Part1;
