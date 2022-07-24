import { WebView } from "react-native-webview";
import React from "react";
export default function Google() {
  return (
    <WebView
      source={{
        uri: "https://google.com",
      }}
      style={{ marginTop: 20 }}
    />
  );
}
