import React, { useState } from 'react';
import { View, Modal, Pressable, Text, SafeAreaView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import reward1 from "../images/reward1.jpeg";
import reward2 from "../images/reward2.png";
import reward3 from "../images/reward3.png";

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
            <Text style={{ color: "darkgreen", fontWeight: "700", fontSize: 24, textAlign:"center" }}>Rewards</Text>
            <View style={{
              marginTop: 40,
            }}>
              <Image 
                style={{
                  width: 240,
                  height: 160
                }}
                source={reward1}
              />
              <Text style={{color: "darkgreen", textAlign:"center", marginTop: 5}}>Visa $10 Gift Card - <Text style={{fontWeight:"bold"}}>1000 points</Text></Text>
            </View>
            <View style={{
              marginTop: 40,
            }}>
              <Image 
                style={{
                  width: 240,
                  height: 160
                }}
                source={reward2}
              />
              <Text style={{color: "darkgreen", textAlign:"center", marginTop: 5}}>Visa $50 Gift Card - <Text style={{fontWeight:"bold"}}>5000 points</Text></Text>
            </View>
            <View style={{
              marginTop: 40,
            }}>
              <Image 
                style={{
                  width: 240,
                  height: 160
                }}
                source={reward3}
              />
              <Text style={{color: "darkgreen", textAlign:"center", marginTop: 5}}>Visa $200 Gift Card - <Text style={{fontWeight:"bold"}}>20000 points</Text></Text>
            </View>
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
    </SafeAreaView>
  );
};

export default IncentivesModalScreen;