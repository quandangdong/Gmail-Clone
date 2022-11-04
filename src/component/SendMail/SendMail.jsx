import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { db } from "../../firebase/firebase";
import "./SendMail.css";

const SendMail = () => {
  const {
    register,
    handleSubmit,
  // eslint-disable-next-line
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "emails"), {
        to: data.to,
        subject: data.subject,
        message: data.message,
        emailTime: Date.now(),
      });
    } catch (error) {
      console.error("Error adding emails: ", error);
    } finally {
      dispatch(closeSendMessage());
    }
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <Close
          className="sendMail_close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <input
          className={errors.to ? "sendMail_error" : ""}
          type="email"
          name="to"
          placeholder="To"
          {...register("to", { required: "To field is required" })}
        />

        <input
          className={errors.subject ? "sendMail_error" : ""}
          type="text"
          name="subject"
          placeholder="Subject"
          {...register("subject", { required: "Subject field is required" })}
        />
        {/* {errors.subject && <p className="sendMail_error">{errors.subject.message}</p>} */}

        <textarea
          type="text"
          name="message"
          placeholder="Message ..."
          className="sendMail_message"
          {...register("message", { required: "Message field is required" })}
        />
        {/* {errors.message && <p className="sendMail_error">{errors.message.message}</p>} */}

        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
