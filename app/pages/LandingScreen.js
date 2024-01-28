import React from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity } from 'react-native';
import LOGO from '../images/logo.png';

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ height: "100vh", backgroundColor: "white" }}>
      <View
        style={{
          marginTop: "40%"
        }}
      >
        <Image 
          source={ LOGO } 
          style={{
            width: 150, 
            height: 150, 
            marginBottom: 50, 
            marginLeft: "auto", 
            marginRight:"auto"
        }}/>

        <Text
          style={{
            fontSize: 36,
            fontWeight: 'bold',
            color: "darkgreen",
            textAlign: "center",
            zIndex: 1
          }}
        >
          WealthWise
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'medium',
            color: "darkgreen",
            textAlign: "center",
            zIndex: 1
          }}
        >
          Your path to financial literacy
        </Text>
      </View>
      <Text
        style={{ 
          textAlign: "center",
          marginLeft: "auto",
          marginRight:"auto",
          marginTop: 85,
          padding: 10,
          fontSize: 12,
          color: "darkgreen"
        }}
      >
        By continuing, you’re accepting our <Text style={{ color: "limegreen" }}>Terms of Service</Text>. To learn more, see the <Text style={{ color: "limegreen" }}>Terms of Use</Text>, <Text style={{ color: "limegreen" }}>Privacy Statement</Text> and <Text style={{ color: "limegreen" }}>Services Agreement</Text>.
      </Text>
      <View
        style={{
          marginTop: 20,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <TouchableOpacity 
          onPress={() => navigation.navigate("LoginScreen")}
          style={{
            backgroundColor: "limegreen",
            borderRadius: 25,
            width: 230,
            padding: 12
          }}
        >
          <Text 
            style={{
              textAlign: "center",
              fontSize: 18,
              color:"white",
              fontWeight: "bold"
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{
            backgroundColor: "darkgreen",
            borderRadius: 25,
            marginTop: 15, 
            width: 230,
            padding: 12
          }}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              color:"white",
              fontWeight: "bold"
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Text>Landing Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("LoginScreen")}/>
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUpScreen")}/> */}
    </SafeAreaView>
  );
};

export default LandingScreen;