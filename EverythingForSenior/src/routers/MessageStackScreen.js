import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessageMainScreen from "../screens/messageScreens/MessageMainScreen";
import SendMessageScreen from "../screens/messageScreens/SendMessageScreen";
import ViewMessageSentScreen from "../screens/messageScreens/ViewMessageSentScreen";
import ViewMessageReceivedScreen from "../screens/messageScreens/ViewMessageReceivedScreen";

const MessageStack = createStackNavigator();

const MessageMainStackScreen = () => {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen
          name="MessageMainScreen"
          component={MessageMainScreen}
          options={{ headerShown: false }}
      />
      <MessageStack.Screen name="SendMessageScreen" component={SendMessageScreen} options={{ headerShown: false }}/>
      <MessageStack.Screen name="ViewMessageSentScreen" component={ViewMessageSentScreen} options={{ headerShown: false }}/>
      <MessageStack.Screen name="ViewMessageReceivedScreen" component={ViewMessageReceivedScreen} options={{ headerShown: false }}/>
    </MessageStack.Navigator>
  );
};

export default MessageMainStackScreen;