import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PhotoMainScreen from "../screens/photoScreens/PhotoMainScreen";
import TakePhotoScreen from "../screens/photoScreens/TakePhotoScreen";
import ViewPhotoScreen from "../screens/photoScreens/ViewPhotoScreen";
import DeletePhotoScreen from "../screens/photoScreens/DeletePhotoScreen";


const PhotoStack = createStackNavigator();

const PhotoMainStackScreen = () => {
  return (
    <PhotoStack.Navigator>
      <PhotoStack.Screen
          name="PhotoMainScreen"
          component={PhotoMainScreen}
          options={{ headerShown: false }}
      />
      <PhotoStack.Screen name="TakePhotoScreen" component={TakePhotoScreen} options={{ headerShown: false }}/>
      <PhotoStack.Screen name="ViewPhotoScreen" component={ViewPhotoScreen} options={{ headerShown: false }}/>
      <PhotoStack.Screen name="DeletePhotoScreen" component={DeletePhotoScreen} options={{ headerShown: false }}/>
    </PhotoStack.Navigator>
  );
};

export default PhotoMainStackScreen;