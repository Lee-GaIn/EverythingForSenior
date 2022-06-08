import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBtn from '../../components/NavBtn';


const MessageMainScreen = ({navigation}) =>  {

 return (
  <>
    <View>
      <NavBtn title="글자 크기 바꾸기" pageName="ChangeFontSizeScreen" navigation={navigation}/>
      <NavBtn title="색깔 바꾸기" pageName="ChangeColorScreen" navigation={navigation}/>
    </View>
  </>
 );
}

export default MessageMainScreen;