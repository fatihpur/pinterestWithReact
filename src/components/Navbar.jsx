import React from "react";
import navbarLogo from "../../public/img/navbarLogo.png";
import "./navbarStyle.css";
import NavbarInput from "./NavbarInput";

export default function Navbar() {
  return (
    <div>
      <div className="navbarWrapper">
        <img className="navbarLogo" src={navbarLogo} alt="" />
        <button className="navbarMainPageButton">Ana Sayfa</button>
        <button className="navbarCreateButton">Oluştur</button>
        <NavbarInput />
      </div>
    </div>
  );
}
