import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext({ authToken: "" });

export function AuthProvider({ children }) {
  const auth = useProviderAuth();

  return (
    <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
  );
}

function useProviderAuth() {
  const [authToken, setAuthToken] = useState("");

  const isSignedIn = () => {
    if (authToken !== ""){
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.clear();
  };

  const getTokenInfo = () => {
    if (!accessToken) return null;

    return authToken;
  };


  return {
    authToken,
    setAuthToken,
    isSignedIn,
    logout,
    getTokenInfo,
  };
}

export const useAuth = () => {
  return useContext(AuthContext);
};