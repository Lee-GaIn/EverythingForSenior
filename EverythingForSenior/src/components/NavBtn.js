import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const NavBtn = ({title, pageName, navigation}) => {
    return (
      <Button 
        title={title} 
        onPress={(e) => {navigation.navigate(pageName)}}
        style={styles.Btn}
      />
    );
}

NavBtn.propTypes = {
  title: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    Btn: {
      backgroundColor: '#3347FF',
      alignItems: 'center',
      justifyContent: 'center',
      width: "50%",
      height: "50%",
    },
  });

export default NavBtn;
  