import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PropsFromRedux, authConnector } from "../../store/auth/connector";
import { FormInput } from "../../components";
import { LoginPayloadValues } from "../../store/auth/types";
import "./login.scss";

const Login = ({ token, loginRequest }: PropsFromRedux) => {
  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState<LoginPayloadValues>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  const formInputs = [
    {
      id: 1,
      label: "Email",
      errorMessage: "Email should be a valid email address!",
      name: "email",
      type: "email",
      placeholder: "Email",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
      required: true,
      value: "",
    },
    {
      id: 2,
      label: "Password",
      errorMessage: "Password should be 6-20 characters",
      // "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character!",
      name: "password",
      type: "password",
      placeholder: "Password",
      pattern: `(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
      value: "",
    },
  ];

  const callback = (token: string) => {
    console.log("login Successfully!");
    const user = {
      user: token,
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginRequest({ values: userInputs, callback });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setUserInputs({ ...userInputs, [target.name]: target.value });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <div className="form">
          <h2>Login</h2>
          <p>Please login to continue.</p>

          {formInputs.map((input) => (
            <div key={input.id}>
              <FormInput
                key={input.id}
                {...input}
                value={userInputs[input.name as keyof LoginPayloadValues]}
                handleChange={handleChange}
              />
            </div>
          ))}

          <input className="btn" type="submit" value="LOGIN" />
        </div>
      </form>

      <p>
        Do not have an account?
        <button className="link" onClick={() => navigate("/signup")}>
          Signup
        </button>
      </p>
    </div>
  );
};

export default authConnector(Login);
