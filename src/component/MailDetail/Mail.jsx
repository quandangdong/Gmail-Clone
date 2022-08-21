import {
  ArrowBack,
  CheckCircle,
  DeleteOutline,
  Email,
  ErrorOutline,
  ExitToAppSharp,
  LabelImportant,
  MoreVert,
  MoveToInboxOutlined,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mail.css";

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_toolsleft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInboxOutlined />
          </IconButton>
          <IconButton>
            <ErrorOutline />
          </IconButton>
          <IconButton>
            <DeleteOutline />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="mail_toolsright">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToAppSharp />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2>Subject</h2>
          <LabelImportant className="mail_important" />
          <p>Title</p>
          <p className="mail_time">10pm</p>
        </div>

        <div className="mail_message">
          <p>This is message</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
