/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import { USER_SIGN_UP } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

const formStyle = css`
  width: 300px;
  font-weight: bold;
  margin: 20px;

  & > label,
  input {
    padding: 5px;
    margin: 10px 0;
  }

  & > button {
    display: block;
    margin: 20px auto;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
  }
`;

const divStyle = css`
  display: flex;
  flex-direction: column;
`;

const formContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUp = () => {
  const history = useHistory();
  const [form, setForm] = useState({ username: null, password: null });
  const [signUp, { data, loading, error }] = useMutation(USER_SIGN_UP, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signUp);
      history.push("/");
    },
  });

  const updateForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    signUp({
      variables: form,
    });
  };

  return (
    <div css={formContainer}>
      <h1>Sign up</h1>

      <form action="" css={formStyle} onSubmit={submitForm}>
        <div css={divStyle}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" onKeyUp={updateForm} />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onKeyUp={updateForm}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
      {loading && <p>Signin up...</p>}
      {error && <pre>{error.message}</pre>}
    </div>
  );
};

export default SignUp;
