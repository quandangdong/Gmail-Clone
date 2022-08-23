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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectOpenMail } from "../../features/mailSlice";
import "./Mail.css";

const Mail = () => {
  const selectMail = useSelector(selectOpenMail);
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

      {selectMail && (
        <div className="mail_body">
          <div className="mail_bodyHeader">
            <h2>{selectMail.subject}</h2>
            <LabelImportant className="mail_important" />
            <p>{selectMail.title}</p>
            <p className="mail_time">{selectMail.time}</p>
          </div>

          <div className="mail_message">
            <p>{selectMail.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mail;
