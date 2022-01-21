import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import LogInScreen from "./Screens/LogInScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LeaderBoard from "./Screens/LeaderBoard";
import Points from "./Screens/Points";

const { width, height } = Dimensions.get("screen");

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabPages = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="LeaderBoard"
        component={LeaderBoard}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Points"
        component={Points}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screens"
          component={TabPages}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
