import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import FantasyScreen from "./FantasyScreen";
import ProfileScreen from './ProfileScreen';
import IncentivesModalScreen from './IncentivesModalScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TabContainerScreens = () => {
    return (
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {backgroundColor: "darkgreen"},
            headerStyle: {
                backgroundColor: '#33FF33',
            },
            headerTitleStyle: {
                fontWeight: "600"
            }
          }}
        >
            <Tab.Screen 
                name="Home"
                component={HomeScreen} 
                options={{
                    headerRight: () => (
                        <IncentivesModalScreen isVisible={false}/>
                    ),
                    tabBarShowLabel: false,
                    tabBarLabel: ({focused, color}) => (
                        <Text style={{ fontSize: 12, fontWeight: (focused ? 700: 300), color: "color" }}>Home</Text>
                    ),
                    cardStyle: { backgroundColor: '#fff' },
                    tabBarIcon: ({ size }) => (
                        <MaterialCommunityIcons name="chart-areaspline" color={"#33FF33"} size={size * 1.3} />
                    ),
                }}
            />

            <Tab.Screen 
                name="Fantasy" 
                component={FantasyScreen} 
                options={{ 
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ size }) => (
                        <MaterialCommunityIcons name="sword" color={"#33FF33"} size={size * 1.3} />
                    ),
                    cardStyle: { backgroundColor: '#fff' }
                }}
            />

            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{ 
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ size }) => (
                        <MaterialCommunityIcons name="account" color={"#33FF33"} size={size * 1.3} />
                    ),
                    cardStyle: { backgroundColor: '#fff' }
                }}
            />
        </Tab.Navigator>
    )
}

export default TabContainerScreens;