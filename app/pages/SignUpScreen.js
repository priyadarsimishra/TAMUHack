import React, { useState } from 'react';
import { SafeAreaView, Text, Button, TextInput, View, TouchableOpacity } from 'react-native';
import { useAuth } from "../AuthContext";
// import { firestore } from "../firebaseConfig";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const db = getFirestore();
  // const { setAuthToken } = useAuth();

  const registerUser = async () => {
    if (username && email && password)
    {
      try 
      {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        // setAuthToken(res?.user.uid);

        await addDoc(collection(db, "users"), {
          uid: res?.user.uid,
          username: username,
          email: email,
          points: 0,
        });
        
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
      {/* <Text>Sign Up Screen</Text> */}
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
          Sign Up
        </Text>
        <TextInput
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
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
          onPress={async () => { await registerUser() }}
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
    </SafeAreaView>
  );
};

export default SignUpScreen;