import React, { useState, useEffect} from 'react';
import { Modal, Pressable, Text, SafeAreaView, View, TouchableOpacity, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getFirestore, collection, getDocs, setDoc, query, where } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";


const QuestionsModalScreen = ({ isVisible, prev, name }) => {
  const [modalVisible, setModalVisible] = useState(isVisible);
  const[definition, setDefinition] = useState();
  const[situation, setSituation] = useState();
  const[questions, setQuestions] = useState({});
  const[choices1, setChoices1] = useState([false, false, false, false]);
  const[choices2, setChoices2] = useState([false, false, false, false]);
  const db = getFirestore();
  const auth = getAuth();
  const[user, setUser] = useState();

  const changeSelection = (index, questionNum) => {
    let _choices = [false, false, false, false];
    _choices[index] = !_choices[index];

    if(questionNum == 1)
        setChoices1(_choices)
    else
        setChoices2(_choices)
  }

  const completeSubmission = async () => {
    if(user && choices1.indexOf(true) != -1 && choices2.indexOf(true) != -1)
    {
        let scoreEarned = 0;
        console.log('ready to submit')
        // console.log(choices)
        if(questions["Question 1"]["Answers"][choices1.indexOf(true)] == questions["Question 1"]["Correct"])
            scoreEarned += 50;

        if(questions["Question 2"]["Answers"][choices2.indexOf(true)] == questions["Question 2"]["Correct"])
            scoreEarned += 50; 

        console.log(scoreEarned)
        // if time include the time component
        
        // user.scores += scoreEarned;
        const res = await setDoc(db, "users", auth.currentUser.uid, {
            points: user.points + scoreEarned
        })
        console.log(res);
    }
  }

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

//   console.log("choices: ", choices)

  useEffect(() => {
    if(modalVisible)
    {
        getDocs(collection(db, prev)).then((snapshot) => {
            snapshot.forEach((doc) => {
                if(doc.id == name)
                {
                    setDefinition(doc.data()['Definition'])
                    setSituation(doc.data()['Situation'])    
                    setQuestions(doc.data()["Questions"])      
                }
                // console.log(doc.id)
            })
        })
    }
  }, [modalVisible])

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
              backgroundColor: "blue", 
              padding: 5,
            }}
            onPress={() => setModalVisible(false)} 
          >
            <MaterialCommunityIcons name="close" size={20} color={"white"} />
          </Pressable>
          <Text>{name}</Text>
          <Text style={{ marginTop: 10 }}>Definition: {definition}</Text>
          <Text style={{ marginTop: 10 }}>Situation: {situation}</Text>
          {questions && questions["Question 1"] ? 
                <View style={{ marginTop: 10 }}>
                    <Text>Question #1: {questions['Question 1']["Question"]}</Text>
                    {(questions["Question 1"]["Answers"]).map((answer, index) => {
                        return (
                            <TouchableOpacity onPress={() => changeSelection(index, 1)} style={{ backgroundColor: (choices1[index] ? "blue": "white")}}>
                                <Text style={{ color: (choices1[index] ? "white": "blue")}}>
                                    {(index == 0 ? "A" : (index == 1 ? "B" : (index == 2 ? "C": (index == 3 ? "D": null))))}. {answer}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            : <Text>Not rendering</Text>
          }
          {questions && questions["Question 2"] ? 
                <View style={{ marginTop: 10 }}>
                    <Text>Question #2: {questions['Question 2']["Question"]}</Text>
                    {(questions["Question 2"]["Answers"]).map((answer, index) => {
                        return (
                            <TouchableOpacity onPress={() => changeSelection(index, 2)} style={{ backgroundColor: (choices2[index] ? "blue": "white")}}>
                                <Text style={{ color: (choices2[index] ? "white": "blue")}}>
                                    {(index == 0 ? "A" : (index == 1 ? "B" : (index == 2 ? "C": (index == 3 ? "D": null))))}. {answer}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}

                    <Button title="submit" onPress={async () => await completeSubmission()}/>
                </View>
            : <Text>Not rendering</Text>
          }
        </SafeAreaView>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
      >
        <View 
            style={{
                backgroundColor: "darkgreen",
                padding: 10,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 5,
                marginBottom: 5
            }}
        >
            <Text style={{ color: "white" }}>{name}</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default QuestionsModalScreen;