import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carousal from "../components/Carousal";

export default function home() {
  return (
    <div>
      <Navbar />
      <Carousal/>
      <div className="m-3">
      <Card/>   
      <Card/>   
      <Card/>   
      <Card/>   

      </div>
      <Footer/>
    </div>
  );
}
