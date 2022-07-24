import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Navbar from "./navbar";

export default function SingleOne({ route, navigation }) {
  return (
    <View>
      <View>
        <SafeAreaView>
          <Navbar />
          <View
            style={{
              marginTop: 100,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: 12,
              marginTop: 25,
              backgroundColor: `#d7dae2`,
              borderRadius: 20,
              height: 280,
              width: 380,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Image
              style={{ width: 105, height: 115, borderRadius: 7 }}
              source={{ uri: route.params.item.image }}
            ></Image>
            <View style={{ flexShrink: 1 }}>
              <Text
                style={{ marginLeft: 20, marginBottom: 5, fontWeight: "bold" }}
              >
                {route.params.item.title}
              </Text>
              <Text style={{ marginLeft: 17 }}>{route.params.item.body}</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}
