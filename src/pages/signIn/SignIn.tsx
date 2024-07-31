import React, { useState } from "react";
import Hero from "../../assets/Hero.png";
import "./SignIn.css";
import { login } from "../../services/api.service";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

type Props = {};

const SignIn = (props: Props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [shouldRunAway, setShouldRunAway] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const onSubmitForm = async () => {
    const response: any = await login(form.email, form.password);
    if (response.ok) {
      const token = response.json().token;
      // Set the JWT in a cookie
      Cookies.set("token", token, { expires: 1, secure: true });
      navigate("/profile");
    } else {
      console.log("Error form");
      setError("Invalid email or password");
      setIsValid(false);
      setShouldRunAway(true); // set shouldRunAway to true
      setTimeout(() => {
        setShouldRunAway(false); // reset shouldRunAway to false after 1 second
        setButtonVisible(false);
      }, 1000);
    }
  };

  return (
    <div className="signin-container">
      <img className="hero-1-img" src={Hero} alt="missing"></img>
      <div className="signin-input-container">
        <h1 className="signin-title">Sign In</h1>
        <div className="signin-input">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="signin-input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="signin-input-field"
          />
          <button
            className={`signin-btn ${shouldRunAway ? "run-away-btn" : ""}`}
            // className={`signin-btn ${isValid ? "" : "run-away-btn"}`}
            onClick={onSubmitForm}
          >
            Sign In
          </button>
          {error ? <div className="signin-error">{error}</div> : null}

          <h1 className="siginin-or">OR</h1>
          <button className="signin-btn-helper">Use a Sign-In Code</button>
          <button className="signin-btn-helper">Forget Password?</button>
          <label className="signin-rememberme">
            <input className="signin-rememberme-checkbox" type="checkbox" />
            Remember Me?
          </label>
          <div className="sigin-text-container">
            <div className="signin-text">New to Netflix?</div>
            <b className="signin-text-signup"> Sign up now.</b>
          </div>
          <div className="signin-text-remark">
            This page is protected by Google reCAPTCHA to ensure you’re not a
            bot.{" "}
            <a href="/signin" className="signin-text-link">
              Learn more.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
