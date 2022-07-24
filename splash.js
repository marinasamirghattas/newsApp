import { Image, View, Text, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
export default function Splash({ navigation: { navigate } }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: `#29e2ba`,
      }}
    >
      <View>
        <Image source={require("./assets/favicon.png")}></Image>
      </View>
      <Text style={{ fontSize: 20, color: "black", padding: 20 }}>
        Welcome to cars news
      </Text>
      <ActivityIndicator size="large" color="black" />
      {delay()}
    </View>
  );
  function delay() {
    AsyncStorage.getItem("mmm").then((value) => {
      {
        value
          ? setTimeout(() => {
              navigate("Home");
            }, 1000)
          : setTimeout(() => {
              navigate("FirstVisit");
            }, 1000);
      }
    });
    setTimeout(() => {
      navigate("Home");
    }, 2000);
  }
}
