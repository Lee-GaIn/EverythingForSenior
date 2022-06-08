import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBtn from '../../components/NavBtn';


const CallMainScreen = ({navigation}) =>  {

 return (
  <>
    <View style={styles.rootCont}>
      <NavBtn title="전화하기" pageName="CallScreen" navigation={navigation}/>
      <NavBtn title="전화번호부" pageName="PhoneBookScreen" navigation={navigation}/>
      <NavBtn title="단축키로 전화하기" pageName="ShortcutCallScreen" navigation={navigation}/>
      <NavBtn title="통화기록" pageName="CallRecordScreen" navigation={navigation}/>
    </View>
  </>
 );
}

const styles = StyleSheet.create({
  rootCont: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
});

export default CallMainScreen;