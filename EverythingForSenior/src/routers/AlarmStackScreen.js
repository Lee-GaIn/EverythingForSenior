import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AlarmMainScreen from "../screens/alarmScreens/AlarmMainScreen"
import ViewAlarmsScreen from "../screens/alarmScreens/ViewAlarmsScreen"
import SetAlarmScreen from "../screens/alarmScreens/SetAlarmScreen"
import DeleteAlarmScreen from "../screens/alarmScreens/DeleteAlarmScreen"

const AlarmStack = createStackNavigator();

const AlarmMainStackScreen = () => {
  return (
    <AlarmStack.Navigator>
      <AlarmStack.Screen
          name="AlarmMainScreen"
          component={AlarmMainScreen}
          options={{ headerShown: false }}
      />
      <AlarmStack.Screen name="ViewAlarmsScreen" component={ViewAlarmsScreen} />
      <AlarmStack.Screen name="SetAlarmScreen" component={SetAlarmScreen} />
      <AlarmStack.Screen name="DeleteAlarmScreen" component={DeleteAlarmScreen} />
    </AlarmStack.Navigator>
  );
};

export default AlarmMainStackScreen;