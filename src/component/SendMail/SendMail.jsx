import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import "./SendMail.css";

const SendMail = () => {
  // eslint-disable-next-line
  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
   console.log("data ne: ", data);
  }

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <Close className="sendMail_close" onClick = {()=> dispatch(closeSendMessage())} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <input
          className= {errors.to ? "sendMail_error" : ""}
          type="email"
          name="to"
          placeholder="To"
          {...register("to",{ required: "To field is required"})}
        />

        <input
          className= {errors.subject ? "sendMail_error" : ""}
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
