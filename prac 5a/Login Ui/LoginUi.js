import React, { useState } from "react";
import "./LoginUi.css";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
function LoginUi() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { username: username, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div className="main">
          <div className="sub-main">
            <div>
              <div className="imgs"></div>
              <div>
                <h1>Login Page</h1>
                <div>
                  <img src={email} alt="email" className="email" />
                  <input
                    type="text"
                    placeholder="user name"
                    className="name"
                    name="username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="second-input">
                  <img src={pass} alt="pass" className="email" />
                  <input
                    type="password"
                    placeholder="user name"
                    className="name"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="login-button">
                  <button type="submit">Login</button>
                </div>
                <div>
                  {allEntry.map((c) => {
                    return (
                      <div>
                        <p>Username-{c.username}</p>
                        <p>Password-{c.password}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div style={{ position: "fixed", bottom: "0", right: "0" }}>
        20cs082_Jheel Shah
      </div>
    </>
  );
}

export default LoginUi;
