import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabContainerScreens from "./pages/TabContainerScreens";
import AuthStackNavigator from "./pages/AuthStackNavigator";
import { AuthProvider } from "./AuthContext";
import "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const auth = getAuth();
  // console.log(authToken)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        // ...
      } else {
        setIsAuthenticated(false);
      }
    });
  }, [])

  return (
    <AuthProvider>
      <NavigationContainer>
        {isAuthenticated ? 
          <TabContainerScreens />
          :
          <AuthStackNavigator />
        }
      </NavigationContainer>
    </AuthProvider>
  );
}