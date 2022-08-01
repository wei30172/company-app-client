import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PropsFromRedux, authConnector } from "../../store/auth/connector";
import { FormInput } from "../../components";
import { AuthPayloadValues } from "../../store/auth/types";
import "../Login/Login.scss";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

const Signup = ({ token, isLoading, signupRequest }: PropsFromRedux) => {
  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState<AuthPayloadValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  const formInputs = [
    {
      id: 1,
      label: "first Name",
      errorMessage:
        "FirstName should be 2-16 characters and shouldn't include any special character!",
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      pattern: "^[A-Za-z0-9]{2,16}$",
      required: true,
    },
    {
      id: 2,
      label: "last Name",
      errorMessage:
        "LastName should be 2-16 characters and shouldn't include any special character!",
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      pattern: "^[A-Za-z0-9]{2,16}$",
      required: true,
    },
    {
      id: 3,
      label: "Email",
      errorMessage: "Email should be a valid email address!",
      name: "email",
      type: "email",
      placeholder: "Email",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
      required: true,
    },
    {
      id: 4,
      label: "Password",
      errorMessage:
        "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character!",
      name: "password",
      type: "password",
      placeholder: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
      value: "",
    },
    {
      id: 5,
      label: "Confirm Password",
      errorMessage: "Passwords don't match!",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      pattern: userInputs.password,
      required: true,
    },
  ];

  const callback = (res: IAuth) => {
    const auth: IAuth = {
      result: {
        name: res.result.name,
        email: res.result.email,
      },
      token: res.token,
    };
    localStorage.setItem("auth", JSON.stringify(auth));
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupRequest({ values: userInputs, callback });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setUserInputs({ ...userInputs, [target.name]: target.value });
  };

  return isLoading ? (
    <div className="page-flex">
      <HourglassEmptyIcon />
    </div>
  ) : (
    <div className="signup">
      <div className="signup_form">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          {formInputs.map((input) => (
            <div key={input.id}>
              <FormInput
                key={input.id}
                {...input}
                value={userInputs[input.name as keyof AuthPayloadValues]}
                handleChange={handleChange}
              />
            </div>
          ))}
          <button
            disabled={
              !userInputs.firstName ||
              !userInputs.lastName ||
              !userInputs.email ||
              !userInputs.password ||
              !userInputs.confirmPassword
            }
            className="btn"
            type="submit"
          >
            REGISTER
          </button>
        </form>
        <div className="signup_form_link flex">
          <p>Already have an account?</p>
          <button className="cursor-pointer" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default authConnector(Signup);
