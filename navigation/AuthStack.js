import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerShown="false">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: " ",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{
          title: " ",
        }}
      />
    </Stack.Navigator>
  );
}
