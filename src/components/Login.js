import React from "react";
import { Button } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "./Login.css";

const login = () => {
  const signIn = () => {};
  return (
    <div className="login">
      <div className="login__container">
        <WhatsAppIcon className="whatsAppIcon" />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign with Google</Button>
      </div>
    </div>
  );
};

export default login;
