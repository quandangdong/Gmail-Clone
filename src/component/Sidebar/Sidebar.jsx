import DuoIcon from "@mui/icons-material/Duo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/Inbox";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import ModeIcon from "@mui/icons-material/Mode";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import StarIcon from "@mui/icons-material/Star";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sideBar">
      <div>
        <Button
          className="sidebar_compose"
          color="inherit"
          startIcon={<ModeIcon />}
          onClick = {()=> dispatch(openSendMessage())}
        >
          Compose
        </Button>
      </div>

      <SidebarOption
        Icon={InboxIcon}
        title={"Inbox"}
        number={54}
        selected={true}
      />
      <SidebarOption
        Icon={StarIcon}
        title={"Started"}
        number={54}
        selected={false}
      />
      <SidebarOption
        Icon={WatchLaterIcon}
        title={"Snoozed"}
        number={54}
        selected={false}
      />
      <SidebarOption
        Icon={LabelImportantIcon}
        title={"Important"}
        number={54}
        selected={false}
      />
      <SidebarOption
        Icon={NearMeIcon}
        title={"Sent"}
        number={54}
        selected={false}
      />
      <SidebarOption
        Icon={NoteIcon}
        title={"Draft"}
        number={54}
        selected={false}
      />
      <SidebarOption
        Icon={ExpandMoreIcon}
        title={"More"}
        number={54}
        selected={false}
      />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
