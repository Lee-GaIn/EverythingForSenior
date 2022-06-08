import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import NavBtn from '../components/NavBtn';

// screen width
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
      <StatusBar style="auto" />
        <View style={styles.textCont}>
          <Text>오늘은 2022년 1월 1일 입니다</Text>
          <Text>지금은 12시 30분입니다</Text>
          <Text>오늘 날씨는 맑습니다</Text>
        </View>
        <View style={styles.btnCont}>
          <NavBtn title="전화" pageName="CallStackScreen" navigation={navigation}/>
          <NavBtn title="문자" pageName="MessageStackScreen" navigation={navigation}/>
          <NavBtn title="사진" pageName="PhotoStackScreen" navigation={navigation}/>
          <NavBtn title="알람" pageName="AlarmStackScreen" navigation={navigation}/>
        </View>
      </View>     
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCont: {
    flex: 1,
    width: SCREEN_WIDTH,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  
  btnCont: {
    flex: 2,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;