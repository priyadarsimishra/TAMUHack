import React, { useState } from 'react';
import { SafeAreaView, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from "../AuthContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {

   const { setAuthToken } = useAuth();
   const auth = getAuth();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const authenticate = async () => 
   {
    if (email && password)
    {
      try 
      {
        const res = await signInWithEmailAndPassword(auth, email, password);        
        console.log(res);
      }
      catch(e)
      {
        console.log(e);
      }
    }
   }

  return (
    <SafeAreaView>
      {/* <Text>Login Screen</Text> */}
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={{
          marginLeft: 10,
          fontWeight: "bold",
          backgroundColor: "green",
          borderRadius: 10,
          padding: 10,
          width: 52
        }}
      >
        <Text style={{color:"white"}}>Back</Text>
      </TouchableOpacity>
      
      <View
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "40%"
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 36,
            textAlign:"center"
          }}
        >
          Login
        </Text>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          style={{
            marginTop: 20,
            padding: 10,
            width: 300,
            borderWidth: 1,
            borderRadius: 10, 
            borderColor: "#000",
          }}
        />
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          style={{
            marginTop: 20,
            padding: 10,
            width: 300,
            borderWidth: 1,
            borderRadius: 10, 
            borderColor: "#000",
          }}
          secureTextEntry={true}
        />
        <TouchableOpacity 
          style={{
            backgroundColor: "darkgreen",
            borderRadius: 25,
            marginTop: 15, 
            width: 230,
            padding: 12,
            marginLeft: "auto",
            marginRight: "auto"
          }}
          onPress={async () => { await authenticate() }}
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
      </View>

    </SafeAreaView>
  );
};

export default LoginScreen;