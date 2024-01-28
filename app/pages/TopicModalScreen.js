import React, { useEffect, useState } from 'react';
import { Alert, Modal, Pressable, Text, SafeAreaView, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getFirestore, collection, getDocs } from "firebase/firestore"; 
import QuestionsModalScreen from './QuestionsModalScreen';

const TopicModalScreen = ({ isVisible, name }) => {
  const [modalVisible, setModalVisible] = useState(isVisible);
  const [subtopics, setSubTopics] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    if(modalVisible)
    {
        let topics = []
        getDocs(collection(db, name)).then((snapshot) => {
            snapshot.forEach((doc) => {
                // console.log(doc.id);
                topics.push(doc.id);
            })
            setSubTopics(topics);
        })
    }
  }, [modalVisible])

  console.log("subtopics ", subtopics)


  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        visible={modalVisible}
      >
        <SafeAreaView style={{ height: "100%", backgroundColor: "#33FF33" }}>
          <Pressable 
            style={{ 
              alignItems:'center',
              justifyContent:'center',
              width: 30,
              height: 30,
              borderRadius:50,
              marginLeft: 15, 
              marginBottom: 5,
              backgroundColor: "darkgreen", 
              padding: 5,
            }}
            onPress={() => setModalVisible(false)} 
          >
            <MaterialCommunityIcons name="close" size={20} color={"white"} />
          </Pressable>
          <View 
            style={{ 
              marginLeft:"auto",
              marginRight: "auto",
            }}
          >
            <Text style={{ color: "darkgreen", fontWeight: "700", fontSize: 24, textAlign:"center" }}>{name}</Text>
            {subtopics?.map((subtopic, key) => {
                return (
                    <QuestionsModalScreen isVisible={false} key={key} prev={name} name={subtopic} />
                )
            })}
          </View>
        </SafeAreaView>
      </Modal>
      <Pressable 
          style={{ 
            alignItems:'center',
            justifyContent:'center',
            width: 150,
            height: 150,
            borderRadius:300,
            backgroundColor: "darkgreen", 
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "15%",
            padding: 5,
            borderWidth: 2, 
            borderColor: "limegreen"
          }}
          onPress={() => setModalVisible(true)}
      >
        <Text style={{color:"white", fontWeight: "700", fontSize: 18, textAlign:'center'}}>{name}</Text>
      </Pressable>
      {/* <Pressable
        onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable> */}
    </SafeAreaView>
  );
};

export default TopicModalScreen;