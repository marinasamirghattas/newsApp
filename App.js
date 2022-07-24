import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./news";
import Splash from "./splash";
import Google from "./google";
import SingleOne from "./singleOne";
import About from "./about";
import FirstVisit from "./firstVisit";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Google" component={Google} />
        <Stack.Screen name="SingleOne" component={SingleOne} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="FirstVisit" component={FirstVisit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
