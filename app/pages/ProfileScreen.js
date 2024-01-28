import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { collection, getDocs, query, where, getFirestore } from "firebase/firestore"; 

const ProfileScreen = () => {
  const auth = getAuth();
  const db = getFirestore();
  const[user, setUser] = useState();

  useEffect(() => {
    if(auth.currentUser)
    {
      const queryUser = async () => {
        const userRef = collection(db, "users")
        const q = await query(userRef, where("uid", "==", auth.currentUser.uid))
        const users = await getDocs(q);
        users.forEach(user => {
          setUser(user.data());
        }) 
      }

      queryUser()
    }
  })

  const logout = async () => {
    try
    {
      const res = await signOut(auth);
      console.log("log out")
    }   
    catch(e)
    {
      console.log(e)
    }
  }

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#33FF33" }}>
      <Text>Profile Screen</Text>
      <Button title="Log out" onPress={async () => { await logout() }}/>
      {user ? 
        <View>
          <Text>{user["username"]}</Text>
          <Text>{user["email"]}</Text>
          <Text>{user["points"]}</Text>
        </View>
      : null}

    </SafeAreaView>
  );
};

export default ProfileScreen;