import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Navbar() {
  const navigation = React.useContext(NavigationContext);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 12,
        marginTop: 35,
        backgroundColor: "#242d3c",
      }}
    >
      <Icon name="home" size={50} color="#fff" />
      <Text style={{ fontSize: 25, color: "#fff", marginRight: 120 }}>
        Car News
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Google")}>
        <Icon name="google" size={45} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
