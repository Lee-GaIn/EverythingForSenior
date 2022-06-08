import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBtn from '../../components/NavBtn';


const MessageMainScreen = ({navigation}) =>  {

 return (
  <>
    <View>
      <NavBtn title="메시지 보내기" pageName="SendMessageScreen" navigation={navigation}/>
      <NavBtn title="보낸 메시지 보기" pageName="ViewMessageSentScreen" navigation={navigation}/>
      <NavBtn title="받은 메시지 보기" pageName="ViewMessageReceivedScreen" navigation={navigation}/>
    </View>
  </>
 );
}

export default MessageMainScreen;