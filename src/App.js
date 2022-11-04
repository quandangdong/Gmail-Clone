import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmailList from "./component/EmailList/EmailList";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import Mail from "./component/MailDetail/Mail";
import SendMail from "./component/SendMail/SendMail";
import Sidebar from "./component/Sidebar/Sidebar";
import { selectIsSendMessageOpened } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";

function App() {
  const sendMessageIsOpened = useSelector(selectIsSendMessageOpened);
  const user = useSelector(selectUser);

  return (
    <BrowserRouter>

      {!user ?
        <Login />
        :
        <div className="App">
          <Header />

          <div className="app_body">
            <Sidebar />

            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>

          {sendMessageIsOpened && <SendMail />}
        </div>
      }

    </BrowserRouter>
  );
}

export default App;
