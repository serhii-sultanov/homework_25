import { useState } from "react";

import AuthContext from "./AuthContext";

import { login } from "../../api";

const userFromStorage = localStorage.getItem("userInfo");

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(!!userFromStorage);
  const [userInfo, setUserInfo] = useState(() => {
    if (userFromStorage) {
      return JSON.parse(userFromStorage);
    }

    return null;
  });

  const [isShownLoginForm, setShownLoginForm] = useState(false);

  const showLoginForm = () => {
    setShownLoginForm(true);
  };

  const closeLoginForm = () => {
    setShownLoginForm(false);
  };

  const loginUser = async (credentials) => {
    const user = await login(credentials);
    setUserInfo(user);
    setLoggedIn(true);
    setShownLoginForm(false);
    localStorage.setItem("userInfo", JSON.stringify(user));
  };

  const logoutUser = () => {
    setUserInfo(null);
    setLoggedIn(false);
    localStorage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isShownLoginForm,
        userInfo,
        loginUser,
        logoutUser,
        showLoginForm,
        closeLoginForm,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
