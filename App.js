import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Login from "./Screens/LogInScreen";

const { width, height } = Dimensions.get("screen");

export default function App() {
  return <Login />;
}
