import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/loginActions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser(email, password));
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="flex flex-col mb-4">
        <label className="mb-2">Email</label>
        <input
          type="email"
          className="border border-gray-300 p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2">Password</label>
        <input
          type="password"
          className="border border-gray-300 p-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleLogin}
      >
        Submit
      </button>
    </div>
  );
};

export default LoginPage;
