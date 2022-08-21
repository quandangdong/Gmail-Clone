import { ArrowDropDown, ChevronLeft, ChevronRight, KeyboardHide, LocalOffer, MoreVert, People, RedoOutlined, Settings } from '@mui/icons-material';
import InboxIcon from "@mui/icons-material/Inbox";
import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import "./EmailList.css";
import EmailRow from './EmailRow/EmailRow';
import Section from './Sections/Section';

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList_setting">
        <div className="emailList_settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList_settingRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList_sections">
        <Section Icon = {InboxIcon} title = "Primary" color = "red" selected = {true} />
        <Section Icon = {People} title = "Social" color = "#1A73E8" selected = {false}/>
        <Section Icon = {LocalOffer} title = "Promotion" color = "green" selected = {false}/>
      </div>

      <div>
        <EmailRow title="Twitch" subject="Hey follow streamer" description="Hey follow streamer" time="10pm" />
      </div>
    </div>
  );
};

export default EmailList;
