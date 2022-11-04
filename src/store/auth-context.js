import { useState } from "react";
import { createContext } from "react";

export const authContext = createContext({
  isLoggedIn: false,
  token: null,
  login: (token) => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const isLoggedIn = !!token;
  const context = {
    isLoggedIn: isLoggedIn,
    token: token,
    login: (token) => {
      setToken(token);
    },
    logout: () => {
      setToken(null);
    },
  };
  return (
    <authContext.Provider value={context}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
