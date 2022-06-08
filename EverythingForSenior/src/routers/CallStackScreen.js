import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CallMainScreen from "../screens/callScreens/CallMainScreen";
import CallScreen from "../screens/callScreens/CallScreen";
import ShortcutCallScreen from "../screens/callScreens/ShortcutCallScreen";
import PhoneBookScreen from "../screens/callScreens/PhoneBookScreen";
import CallRecordScreen from "../screens/callScreens/CallRecordScreen";

const CallStack = createStackNavigator();

const CallMainStackScreen = () => {
  return (
    <CallStack.Navigator>
      <CallStack.Screen
          name="CallMainScreen"
          component={CallMainScreen}
          options={{ headerShown: false }}
      />
      <CallStack.Screen name="CallScreen" component={CallScreen} options={{ headerShown: false }}/>
      <CallStack.Screen name="PhoneBookScreen" component={PhoneBookScreen} options={{ headerShown: false }}/>
      <CallStack.Screen name="ShortcutCallScreen" component={ShortcutCallScreen} options={{ headerShown: false }}/>
      <CallStack.Screen name="CallRecordScreen" component={CallRecordScreen} options={{ headerShown: false }}/>
    </CallStack.Navigator>
  );
};

export default CallMainStackScreen;