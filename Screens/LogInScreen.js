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
const { width, height } = Dimensions.get("screen");

export default Login = () => {
  const EmailTextInput = () => {
    return (
      <View
        style={{
          width: width * 0.8,
          height: height * 0.07,
          backgroundColor: "transparent",
          borderBottomWidth: 2,
          borderColor: "#E5E4E2",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <MaterialIcons name="email" size={30} color="#AFE1AF" />
        <TextInput
          placeholder="Email"
          style={{ width: "85%", height: "100%", fontSize: 18 }}
        />
      </View>
    );
  };

  const PasswordTextInput = () => {
    return (
      <View
        style={{
          width: width * 0.8,
          height: height * 0.07,
          backgroundColor: "transparent",
          borderBottomWidth: 2,
          borderColor: "#E5E4E2",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <MaterialIcons name="lock" size={30} color="#AFE1AF" />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={{ width: "85%", height: "100%", fontSize: 18 }}
        />
      </View>
    );
  };

  const SignInUsingOtherPlatforms = () => {
    return (
      <View
        style={{
          width: width * 0.9,
          height: height * 0.14,
          backgroundColor: "transparent",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: width * 0.01,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#C0C0C0",
          }}
        >
          {" "}
          Sign in Using
        </Text>
        <View
          style={{
            width: "80%",
            height: "60%",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#AFE1AF",
              width: "20%",
              height: "90%",
              justifyContent: "center",
              alignItems: "center",
              shadowOpacity: 0.2,
              shadowRadius: 5,
              borderRadius: 10,
            }}
          >
            <FontAwesome name="facebook" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#AFE1AF",
              width: "20%",
              height: "90%",
              justifyContent: "center",
              alignItems: "center",
              shadowOpacity: 0.2,
              shadowRadius: 5,
              borderRadius: 10,
            }}
          >
            <FontAwesome name="google-plus" size={27} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#AFE1AF",
              width: "20%",
              height: "90%",
              justifyContent: "center",
              alignItems: "center",
              shadowOpacity: 0.2,
              shadowRadius: 5,
              borderRadius: 10,
            }}
          >
            <FontAwesome name="twitter" size={35} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const LogInButton = () => {
    return (
      <TouchableOpacity
        style={{
          width: width * 0.9,
          height: height * 0.08,
          backgroundColor: "#AFE1AF",
          borderRadius: width * 0.02,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Log in
        </Text>
      </TouchableOpacity>
    );
  };

  const SignUoButton = () => {
    return (
      <TouchableOpacity
        style={{
          width: width * 0.9,
          height: height * 0.08,
          backgroundColor: "transparent",
          borderRadius: width * 0.02,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#E5E4E2",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Sign up
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width,
          height,
          backgroundColor: "#AFE1AF",
        }}
      >
        <View style={{ flex: 0.45 }} />

        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderTopLeftRadius: width * 0.1,
            borderTopRightRadius: width * 0.1,
            justifyContent: "space-around",
            padding: width * 0.05,
          }}
        >
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
            }}
          >
            Welcome, ......
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "#899499",
              opacity: 0.5,
              marginBottom: width * 0.02,
            }}
          >
            {" "}
            Sign in to continue
          </Text>

          <EmailTextInput />
          <PasswordTextInput />

          <SignInUsingOtherPlatforms />

          <LogInButton />
          <SignUoButton />

          <TouchableOpacity
            style={{
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "700",
                opacity: 0.4,
                marginBottom: height * 0.01,
              }}
            >
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
