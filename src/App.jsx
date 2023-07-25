// app.jsx
import React, { useState } from "react";
import store from "./redux/store";
import { Provider, useSelector } from "react-redux";
import LoginPage from "./redux/pages/loginPages";
import UsersPage from "./redux/pages/userPages";

const App = () => {
  return (
    <Provider store={store}>
      <MainContent />
    </Provider>
  );
};

const MainContent = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">tugas day 36</h1>
      {!isLoggedIn ? <LoginPage /> : <UsersPage />}
    </div>
  );
};

export default App;
