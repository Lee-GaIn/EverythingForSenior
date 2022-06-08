import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBtn from '../../components/NavBtn';


const PhotoMainScreen = ({navigation}) =>  {

 return (
  <>
    <View>
      <NavBtn title="사진 찍기" pageName="TakePhotoScreen" navigation={navigation}/>
      <NavBtn title="찍은 사진 보기" pageName="ViewPhotoScreen" navigation={navigation}/>
      <NavBtn title="찍은 사진 지우기" pageName="DeletePhotoScreen" navigation={navigation}/>
    </View>
  </>
 );
}

export default PhotoMainScreen;