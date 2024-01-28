import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Pressable, View } from 'react-native';
import { getFirestore, collection, getDocs } from "firebase/firestore"; 
import TopicModalScreen from './TopicModalScreen';

const HomeScreen = ({ navigation }) => {
  const[modalOpen, setModalOpen] = useState(false);
  const[topics, _] = useState(["Credit Cards", "Debt + Credit", "Investing + Saving"])
  // const db = getFirestore();

  useEffect(() => {
    // const getTopics = async () => {
    //   const res = await getDoc(collection(db, "users"));
    //   console.log(res)
    // }

    // getTopics();
    // getDocs(collection(db, "users")).then((snapshot) => {
    //   snapshot.forEach((doc) => {
    //     console.log(doc.data())
    //   })
    // })
  }, [])

  
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#33FF33" }}>
      {/* <Text>Home Screen</Text> */}
      <View>
        <TopicModalScreen isVisible={false} name={topics[0]}/>
        <TopicModalScreen isVisible={false} name={topics[1]}/>
        <TopicModalScreen isVisible={false} name={topics[2]}/>
       </View>
    </SafeAreaView>
  );
};

export default HomeScreen;