import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootNavigator from "./navigation/RootNavigator";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./utils/lib/Colours/ThemeProvider";




export default function App() {
  return (
    <ThemeProvider>

      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar hidden={false} translucent />


          <RootNavigator />


        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>

  )

}