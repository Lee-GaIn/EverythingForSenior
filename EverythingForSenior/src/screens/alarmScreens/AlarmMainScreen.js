import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBtn from '../../components/NavBtn';


const AlarmMainScreen = ({navigation}) =>  {

 return (
  <>
    <View>
      <NavBtn title="알람 보기" pageName="ViewAlarmsScreen" navigation={navigation}/>
      <NavBtn title="알람 추가하기" pageName="SetAlarmScreen" navigation={navigation}/>
      <NavBtn title="알람 삭제하기" pageName="DeleteAlarmScreen" navigation={navigation}/>
    </View>
  </>
 );
}

export default AlarmMainScreen;