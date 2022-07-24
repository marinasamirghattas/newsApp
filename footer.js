import { Image, View, TouchableOpacity, Linking } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import React from "react";

export default function Footer() {
  const navigation = React.useContext(NavigationContext);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 12,
        backgroundColor: "#242d3c",
        position: "absolute",
        bottom: 0,
        width: `100%`,
        zIndex: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Icon name="info-circle" size={50} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("whatsapp://send?text=hello&phone=+201029920074")
        }
      >
        <Icon name="whatsapp" size={50} color="#fff" />
      </TouchableOpacity>

      <Icon name="home" size={50} color="#fff" />
    </View>
  );
}
