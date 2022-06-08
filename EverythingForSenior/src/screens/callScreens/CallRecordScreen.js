import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CallLogs from 'react-native-call-log'

const CallRecordScreen = () => {
  const log = "";

  useEffect(async() => {
    log = await CallLogs.loadAll().then(console.log(log));
  }, []);

  return (
    <View>
      <Text>CallRecordScreen</Text>
    </View>
  );
}

export default CallRecordScreen;