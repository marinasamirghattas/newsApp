import { View, Text } from "react-native";
import { useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FirstVisit() {
  useEffect(() => {
    AsyncStorage.setItem("mmm", "yes");
  });

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        marginTop: 25,
        backgroundColor: `#d7dae2`,
        borderRadius: 20,
        height: "70%",
        width: 380,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "auto",
        marginTop: "auto",
      }}
    >
      <View style={{ flexShrink: 1 }}>
        <Text style={{ marginLeft: 20, marginBottom: 5, fontWeight: "bold" }}>
          HELLO !! THIS IS YOUR FIRST VISIT .. know more about us
        </Text>
        <Text style={{ marginLeft: 17 }}>
          To hear Bruce Benedict tell it, invent­ing the first modern ragtop
          pickup truck was not a stroke of genius but rather a reasoned response
          to an obvious marketing need. To hear Bruce Benedict tell it,
          invent­ing the first modern ragtop pickup truck was not a stroke of
          genius but rather a reasoned response to an obvious marketing need. To
          hear Bruce Benedict tell it, invent­ing the first modern ragtop pickup
          truck was not a stroke of genius but rather a reasoned response to an
          obvious marketing need. To hear Bruce Benedict tell it, invent­ing the
          first modern ragtop pickup truck was not a stroke of genius but rather
          a reasoned response to an obvious marketing need. To hear Bruce
          Benedict tell it, invent­ing the first modern ragtop pickup truck was
          not a stroke of genius but rather a reasoned response to an obvious
          marketing need. To hear Bruce Benedict tell it, invent­ing the first
          modern ragtop pickup truck was not a stroke of genius but rather a
          reasoned response to an obvious marketing need.
        </Text>
      </View>
    </View>
  );
}
