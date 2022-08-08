import SignInScreen from "../src/screen/SignIn/SignIn";
import SignUpScreen from "../src/screen/SignUp/SignUp";
import ForgotPwScreen from "../src/screen/ForgotPW/ForgotPW";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from "./tabNavigator";


const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="SignIn"
                    component={SignInScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="forgotPw"
                    component={ForgotPwScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Tab"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
    );
}

export default StackNavigator;