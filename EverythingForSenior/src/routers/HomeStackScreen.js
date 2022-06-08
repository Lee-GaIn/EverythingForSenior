import React  from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import CallStackScreen from "./CallStackScreen";
import MessageStackScreen from "./MessageStackScreen";
import PhotoStackScreen from "./PhotoStackScreen";
import AlarmStackScreen from "./AlarmStackScreen";
import GoBackScreen from "./GoBackScreen";
import SettingStackScreen from "./SettingStackScreen";


const MainStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
      />
      <HomeStack.Screen name="CallStackScreen" component={CallStackScreen} options={{ headerShown: false }}/>
      <HomeStack.Screen name="MessageStackScreen" component={MessageStackScreen} options={{ headerShown: false }}/>
      <HomeStack.Screen name="PhotoStackScreen" component={PhotoStackScreen} options={{ headerShown: false }}/>
      <HomeStack.Screen name="AlarmStackScreen" component={AlarmStackScreen} options={{ headerShown: false }}/>
    </HomeStack.Navigator>
  );
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="뒤로 가기" component={HomeStackScreen}  options={{ headerShown: false, backBehavior: 'none' }} />
      <MainStack.Screen name="처음으로 돌아가기" component={HomeStackScreen} options={{ headerShown: false }}/>
      <MainStack.Screen name="환경설정" component={SettingStackScreen} options={{ headerShown: false }}/>
    </MainStack.Navigator>
  );
};

export default MainStackScreen;