import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMail } from "../../../features/mailSlice";
import "./EmailRow.css";

const EmailRow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMailClicked = () => {
    dispatch(selectMail({ id, title, subject, description, time }));
    navigate("/mail");
  };

  return (
    <div className="emailRow" onClick={openMailClicked}>
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div className="emailRow_title">
        <h3>{title}</h3>
      </div>
      <div className="emailRow_message">
        <h4>
          {subject} {"  "}
          <span className="emailRow_description">{description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
};

export default EmailRow;
