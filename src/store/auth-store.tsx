import { createContext, useState } from "react";
import { removeStorageData, setStorageData } from "../utils/storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();

  const authenticate = async (token) => {
    setAuthToken(token);
    await setStorageData("token", token);
  };

  const logout = async () => {
    setAuthToken(null);
    await removeStorageData("token");
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
