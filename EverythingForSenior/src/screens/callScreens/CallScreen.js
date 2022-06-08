import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as Linking from "expo-linking"

const KOREA_COUNTRY_CALLING_CODE = "82";

const CallScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const _onPress = (value) => {
    setPhoneNumber((prev) => (prev + value))
  }

  const _deleteAll = () => {
    if (phoneNumber === "") {
      return;
    }

    setPhoneNumber("");
  }

  const _deleteChar = () => {
    if (phoneNumber === "") {
      return;
    }
    const newPhoneNumber = phoneNumber.substring(0, phoneNumber.length - 1);
    setPhoneNumber(newPhoneNumber)
  }

  const _makeCall = () => {
    if (phoneNumber === "") {
      return;
    }
    
    if(!phoneNumber.includes("+")){
      setPhoneNumber((prev) => ("+" + KOREA_COUNTRY_CALLING_CODE + " " + prev));
    }

    Linking.openURL("tel:" + phoneNumber);
  }

  return (
    <>
      <View className="rootCont" style={styles.rootCont}>
        <View className="phoneNumCont" style={styles.phoneNumCont}>
          <Text>{phoneNumber}</Text>
        </View>
        <View className="numBtnCont" style={styles.numBtnCont}>
          <View className="numBtnSubCont" style={styles.numBtnSubCont}>
            <Button onPress={() => _onPress("1")} title="1" />
            <Button onPress={() => _onPress("2")} title="2" />
            <Button onPress={() => _onPress("3")} title="3" />
          </View>
          <View className="numBtnSubCont" style={styles.numBtnSubCont}>
            <Button onPress={() => _onPress("4")} title="4" />
            <Button onPress={() => _onPress("5")} title="5" />
            <Button onPress={() => _onPress("6")} title="6" />
          </View>
          <View className="numBtnSubCont" style={styles.numBtnSubCont}>
            <Button onPress={() => _onPress("7")} title="7" />
            <Button onPress={() => _onPress("8")} title="8" />
            <Button onPress={() => _onPress("9")} title="9" />
          </View>
          <View className="numBtnSubCont" style={styles.numBtnSubCont}>
            <Button onPress={() => _onPress("#")} title="#" />
            <Button onPress={() => _onPress("0")} title="0" />
            <Button onPress={() => _onPress("+")} title="+" />
          </View>
        </View>
        <View className="funcBtnCont" style={styles.funcBtnCont}>
            <Button onPress={_deleteAll}title="모두 지우기" />
            <Button onPress={_makeCall} title="전화" />
            <Button onPress={_deleteChar} title="지우기" />
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  rootCont: {
    flex: 1,

  },

  phoneNumCont: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  numBtnCont: {
    flex: 5,

  },

  funcBtnCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "flex-end"
  },


  numBtnSubCont: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "flex-end"
  },
});


export default CallScreen;