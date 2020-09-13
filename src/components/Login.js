import React from "react";
import { Button } from "@material-ui/core";

import { auth, provider } from "../firebase";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "./Login.css";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
    });
  };

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

export default Login;
