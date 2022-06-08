import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingMainScreen from "../screens/settingScreens/SettingMainScreen"
import ChangeFontSizeScreen from "../screens/settingScreens/ChangeFontSizeScreen"
import ChangeColorScreen from "../screens/settingScreens/ChangeColorScreen"

const SettingStack = createStackNavigator();

const SettingMainStackScreen = () => {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
          name="SettingMainScreen"
          component={SettingMainScreen}
          options={{ headerShown: false }}
      />
      <SettingStack.Screen name="ChangeFontSizeScreen" component={ChangeFontSizeScreen} />
      <SettingStack.Screen name="ChangeColorScreen" component={ChangeColorScreen} />
    </SettingStack.Navigator>
  );
};

export default SettingMainStackScreen;