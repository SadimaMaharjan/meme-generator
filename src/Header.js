import React from "react";
import logo from "./Troll-Face.png";

export default function Header() {
  return (
    <div className="navbar">
      <img src={logo} className="logo" />
      <h2 className="logo-title">Meme Generator</h2>
      <h4 className="sub-title">React Project</h4>
    </div>
  );
}
