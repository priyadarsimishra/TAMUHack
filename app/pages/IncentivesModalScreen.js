import React, { useState } from 'react';
import { View, Modal, Pressable, Text, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const IncentivesModalScreen = ({ isVisible }) => {
  const [modalVisible, setModalVisible] = useState(isVisible);

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
            <Text style={{ color: "darkgreen", fontWeight: "700", fontSize: 24 }}>Rewards</Text>
          </View>
        </SafeAreaView>
      </Modal>
      <Pressable 
          style={{ 
              alignItems:'center',
              justifyContent:'center',
              width: 38,
              height: 38,
              borderRadius:50,
              marginRight: 10, 
              marginBottom: 5,
              backgroundColor: "yellow", 
              padding: 5,
              borderColor: "#BC9300",
              borderWidth: 2,
          }}
          onPress={() => setModalVisible(true)}
      >
          <MaterialCommunityIcons name="trophy-outline" size={24} color={"#BC9300"} />
      </Pressable>
      {/* <Pressable
        onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable> */}
    </SafeAreaView>
  );
};

export default IncentivesModalScreen;