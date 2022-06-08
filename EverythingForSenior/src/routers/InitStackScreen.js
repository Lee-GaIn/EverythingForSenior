import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native";
import HomeStackScreen from "./HomeStackScreen";

function InitStackScreen() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeStackScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default InitStackScreen;

