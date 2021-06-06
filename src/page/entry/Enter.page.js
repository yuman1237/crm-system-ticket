import React, { useState } from "react";
import "./entry.style.css";
import { Jumbotron } from "react-bootstrap";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
import { Login } from "../../components/login/Login.comp";
export const Enter = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("fill the info");
    }
    // Call API to Submit the Form
    console.log(email, password);
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return alert("fill the email");
    }
    // Call API to Submit the Form
    console.log(email);
  };
  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === "login" && (
          <Login
            handleOnchange={handleOnchange}
            email={email}
            password={password}
            formSwitcher={formSwitcher}
            handleOnSubmit={handleOnSubmit}
          />
        )}
        {frmLoad === "reset" && (
          <ResetPassword
            handleOnchange={handleOnchange}
            email={email}
            formSwitcher={formSwitcher}
            handleOnResetSubmit={handleOnResetSubmit}
          />
        )}
      </Jumbotron>
    </div>
  );
};
