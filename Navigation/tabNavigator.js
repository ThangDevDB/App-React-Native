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
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#00CC33",
        tabBarInactiveTintColor: "black",
        tabBarActiveBackgroundColor: "#EEEEEE",
        tabBarInactiveBackgroundColor: "#EEEEEE",

        tabBarStyle: {
          height: 60,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 12,
          // bottom: 5,
          // marginHorizontal: 10,
          shadowColor: "#000",
          shadowOpacity: 1,
        }
      }}

    // tabBar={(props) => <CustomTabBar {...props} />
    >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={27} color={color} />
        }}
      />

      <Tab.Screen
        name="Shopping"
        component={Shopping}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="shopping-cart" size={27} color={color} />
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
          tabBarIcon: ({ color }) => <Ionicons name="people" size={27} color={color} />
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={27} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}