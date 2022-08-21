import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png"
          alt="gmail"
        />
      </div>

      <div className="header_middle">
        <SearchIcon />
        <input
          type="text"
          className="Search mail"
          placeholder="Search in mail"
        />
        <TuneIcon className="header_inputCaret" />
      </div>

      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar sx={{ width: 30, height: 30 }} />
      </div>
    </div>
  );
};

export default Header;
