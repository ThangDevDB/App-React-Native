import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../tabScreen/Home';
import Shopping from '../tabScreen/Shopping';
import Me from '../tabScreen/Me';
import Settings from '../tabScreen/Settings';
import QRpay from '../tabScreen/QRpay';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "cyan",
        tabBarInactiveTintColor: "black",
        tabBarActiveBackgroundColor: "pink",
        tabBarInactiveBackgroundColor: "pink"
      }}
    >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
        }}
      />

      <Tab.Screen
        name="Shopping"
        component={Shopping}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="shopping-cart" size={24} color={color} />
        }}
      />

      <Tab.Screen
        name="QR"
        component={QRpay}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="qrcode-scan" size={37} color={color} />
        }}
      />

      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color={color} />
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}