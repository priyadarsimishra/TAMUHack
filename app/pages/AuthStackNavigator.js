import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import LandingScreen from "./LandingScreen";

const AuthStack = createStackNavigator();

const AuthStackNavigator = () =>
{
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="LandingScreen" 
                component={LandingScreen} 
                options={{ 
                    gestureEnabled: false,
                    headerShown: false,
                    cardStyle: { backgroundColor: '#fff' }
                }}
            />
            <AuthStack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    gestureEnabled: false,
                    title: "Login",
                    headerShown: false,
                    cardStyle: { backgroundColor: '#33FF33' }
                }}
            />
            <AuthStack.Screen 
                name="SignUpScreen" 
                component={SignUpScreen} 
                options={{ 
                    gestureEnabled: false,
                    headerShown: false,
                    cardStyle: { backgroundColor: '#33FF33' }
                }}
            />
        </AuthStack.Navigator>
    )
}


export default AuthStackNavigator;