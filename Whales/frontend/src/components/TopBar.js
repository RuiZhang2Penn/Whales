import React from "react";
import logo from "../assets/images/logo.svg";

import { LogoutOutlined } from "@ant-design/icons";

function TopBar(props) {
  const { isLoggedIn, handleLogout } = props;
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <span className="App-title">Share your travel moments and experiences on Around Web</span>
      {isLoggedIn ? (
        <LogoutOutlined className="logout" onClick={handleLogout} />
      ) : null}
    </header>
  );
}

export default TopBar;
