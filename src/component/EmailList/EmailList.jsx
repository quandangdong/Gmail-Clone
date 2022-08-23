import { ArrowDropDown, ChevronLeft, ChevronRight, KeyboardHide, LocalOffer, MoreVert, People, RedoOutlined, Settings } from '@mui/icons-material';
import InboxIcon from "@mui/icons-material/Inbox";
import { Checkbox, IconButton } from '@mui/material';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import "./EmailList.css";
import EmailRow from './EmailRow/EmailRow';
import Section from './Sections/Section';
import { selectIsSendMessageOpened } from "../../features/mailSlice";
import { useSelector } from "react-redux";


const EmailList = () => {
  const sendMessageIsOpened = useSelector(selectIsSendMessageOpened);

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [];
      const emailsRef = collection(db, "emails");
      const queryData = await getDocs(
        query(emailsRef, orderBy("emailTime", "desc"))
      );
      queryData.forEach((doc) => data.push({...doc.data(), id : doc.id}));
      return data;
    };

    fetchData()
      .then((data) => {
        setEmails(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sendMessageIsOpened]);

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
        <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
        <Section
          Icon={People}
          title="Social"
          color="#1A73E8"
          selected={false}
        />
        <Section
          Icon={LocalOffer}
          title="Promotion"
          color="green"
          selected={false}
        />
      </div>

      {emails &&
        emails.map((email) => (
          <div key={email.id}>
            <EmailRow
              title={email.subject}
              subject={email.subject}
              description={email.message}
              time={new Date(email.emailTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            />
          </div>
        ))}
    </div>
  );
};

export default EmailList;
